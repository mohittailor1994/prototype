import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PrototypeServiceService } from './main/service/prototype-service.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: PrototypeServiceService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authenticationService.userValue;
    // @ts-ignore
    localStorage.setItem('token', user?.access_token);
    debugger
    if (user) {
      // check if route is restricted by role
      if (route.data.token) {
        // role not authorised so redirect to home page
        this.router.navigate(['/home']);
        return false;
      }

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
  }
}
