import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  list = [
    'Accueil',
    'Profil',
    'Conférences',
    'Amis',
    'Notifications',
    'Aide'
  ];

  activeItem = 'Accueil';

  selectItem(item: string): void {

    this.activeItem = item;

    const targetId: Record<string, string> = {
      Profil: 'profil',
      Amis: 'amis',
      Notifications: 'notifications',
      Conférences: 'conferences'
    };

    if (item === 'Accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = targetId[item];

    if (target) {
      document.getElementById(target)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}