
import { Component, signal } from '@angular/core';

import { Header } from './Components/header/header';
import { Navbar } from './Components/navbar/navbar';
import { Friends } from './Components/friends/friends';
import { Footer } from './Components/footer/footer';
import { Notifications } from './Components/notifications/notifications';
import { Profil } from './Components/profil/profil';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Navbar,
    Friends,
    Footer,
    Notifications,
    Profil
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atelier');
}
