import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = {
    name: '',
    email: '',
    address: '',
  };

  constructor() { }

  ngOnInit(): void {
    this.user = {
      name: 'Rutuja',
      email: 'rutu@gmail.com',
      address: 'Sector 2, Nerul.',
    };
  }

  saveProfile(): void {
    console.log('Profile saved', this.user);
  }
}
