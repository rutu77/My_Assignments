import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: string | null = null;

  constructor(private router: Router) {}

  login(role: string) {
    this.userRole = role;
    console.log('User logged in as:', this.userRole); 
  }

  getRole(): string | null {
    return this.userRole;
  }

  hasRole(allowedRoles: string[]): boolean {
    console.log('Checking Role:', this.userRole, 'Allowed:', allowedRoles);
    return this.userRole ? allowedRoles.includes(this.userRole) : false;
  }

  logout() {
    console.log('User logged out');
    this.userRole = null;
    this.router.navigate(['/login']);
  }
}