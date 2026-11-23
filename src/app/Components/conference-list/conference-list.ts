import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, UpperCasePipe, DatePipe } from '@angular/common';

import { Conference } from '../../Models/conference';
import { ConferenceDetails } from '../conference-details/conference-details';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe, ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceList {

  searchTerm = '';
  selectedConference: Conference | null = null;

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Les nouveautés d’Angular 21 : signals, zoneless et contrôle de flux natif.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les Signals Angular.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Panorama des technologies web modernes.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 50,
    },
    {
      id: 4,
      title: 'TypeScript Day',
      description: 'Édition 2025, déjà terminée.',
      date: new Date(2025, 4, 10),
      place: 'Monastir',
      maxParticipants: 80,
      nbParticipants: 80,
    },
  ];

  // Conférences à venir uniquement
  get upcomingConferences(): Conference[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.conferences.filter(c => c.date >= today);
  }

  // Filtre par titre
  get filteredConferences(): Conference[] {
    const search = this.searchTerm.trim().toLowerCase();
    return this.upcomingConferences.filter(c =>
      c.title.toLowerCase().includes(search)
    );
  }

  remainingPlaces(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  // Vert : > 10 places | Orange : 1 à 10 | Rouge : complet
  getButtonClass(conference: Conference): string {
    const remaining = this.remainingPlaces(conference);
    if (remaining === 0) return 'btn-full';
    if (remaining <= 10) return 'btn-low';
    return 'btn-available';
  }

  register(conference: Conference, event?: Event): void {
    event?.stopPropagation();
    if (this.remainingPlaces(conference) > 0) {
      conference.nbParticipants++;
    }
  }

  toggleDetails(conference: Conference): void {
    this.selectedConference =
      this.selectedConference?.id === conference.id ? null : conference;
  }
}