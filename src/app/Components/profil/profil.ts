import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  standalone: true,
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {

  user = {
    name: 'Ahmed',
    email: 'ahmed@gmail.com'
  };

}