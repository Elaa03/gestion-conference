import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {

  friendsList = [
    { name: 'Sami', email: 'sami@example.com' },
    { name: 'Sarra', email: 'sarra@example.com' },
    { name: 'Amine', email: 'amine@example.com' }
  ];

}