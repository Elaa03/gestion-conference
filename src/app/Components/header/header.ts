import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  title = 'Conference App';
  msg = 'Bienvenue sur votre espace utilisateur';

}