import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-conference-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css'
})
export class ConferenceDetails {

  // Parent → enfant : conférence sélectionnée
  @Input() conference: Conference | null = null;

  // Enfant → parent : demande d'inscription
  @Output() registered = new EventEmitter<Conference>();

  get remaining(): number {
    return this.conference
      ? this.conference.maxParticipants - this.conference.nbParticipants
      : 0;
  }

  register(): void {
    if (this.conference && this.remaining > 0) {
      this.registered.emit(this.conference);
    }
  }
}