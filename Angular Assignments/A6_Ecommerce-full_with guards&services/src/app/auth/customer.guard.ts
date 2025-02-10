import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Role } from './role.enum';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authService.isCustomer();
  }
}



  //   const value= localStorage.getItem('isLoggedIn');

  //   if(value!=='true'){
  //     return false;
  //   }
  //   const role=localStorage.getItem('role');

  //   if(role!=='Manager'){
  //     return true;
  //   }

  //   this.router.navigate(['/user/login'])
  //   return false;
  // }

