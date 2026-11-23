import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceDetails } from './conference-details';
import { Conference } from '../../Models/conference';

describe('ConferenceDetails', () => {
  let component: ConferenceDetails;
  let fixture: ComponentFixture<ConferenceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferenceDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the selected conference when registering', () => {
    const conference: Conference = {
      id: 1,
      title: 'Angular Conference',
      description: 'Angular updates',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    };
    const registered = vi.fn();
    component.registered.subscribe(registered);
    fixture.componentRef.setInput('conference', conference);
    fixture.detectChanges();

    fixture.nativeElement.querySelector('button').click();

    expect(registered).toHaveBeenCalledWith(conference);
  });

  it('should disable registration when the conference is full', () => {
    fixture.componentRef.setInput('conference', {
      id: 1,
      title: 'Angular Conference',
      description: 'Angular updates',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 100,
    });
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(button.disabled).toBe(true);
    expect(button.textContent).toContain('Complet');
  });
});
