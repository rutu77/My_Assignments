import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  Login(role: Role) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', JSON.stringify(role));
    this.router.navigate(['user/dashboard']);
  }

  getRole(): Role | null {
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    let role = localStorage.getItem('role');
    if (isLoggedIn && role) {
      return JSON.parse(role) as Role;
    }
    return null;
  }

  isCustomer(): boolean {
    const role = this.getRole();
    if (!role) {
      alert("Login first!");
      this.router.navigate(['user/login']);
      return false;
    }
    if (role === Role.Manager) {
      alert("You don't have access");
      return false;
    }
    return true;
  }

  isManager(): boolean {
    const role = this.getRole();
    if (!role) {
      alert("Login first!");
      this.router.navigate(['user/login']);
      return false;
    }
    if (role === Role.Customer) {
      alert("You don't have access");
      return false;
    }
    return true;
  }

  isAdmin(): boolean {
    const role = this.getRole();
    if (!role) {
      alert("Login first!");
      this.router.navigate(['user/login']);
      return false;
    }
    if (role !== Role.Admin) {
      alert("You don't have access");
      return false;
    }
    return true;
  }
}


