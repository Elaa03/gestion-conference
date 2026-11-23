import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {

  notifList = [
    {
      id: 1,
      message: 'Une nouvelle conférence est disponible.'
    },
    {
      id: 2,
      message: 'Votre profil a été mis à jour.'
    },
    {
      id: 3,
      message: 'Bienvenue sur Conference App !'
    }
  ];

  show = false;

  get btnText(): string {
    return this.show
      ? 'Masquer les notifications'
      : 'Afficher les notifications';
  }

  showNotifications(): void {
    this.show = !this.show;
  }

}