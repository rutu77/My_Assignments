
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Role } from './role.enum';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authService.isAdmin();
  }
}

 
 //   const value= localStorage.getItem('isLoggedIn');

  //   if(value!=='true'){
  //     return false;
  //     alert("Only Admin can Access")
  //   }
  //   const role=localStorage.getItem('role');

  //   if(role==='Admin'){
  //     return true;
  //   }

  //   this.router.navigate(['/'])
  //   return false;
  // }

