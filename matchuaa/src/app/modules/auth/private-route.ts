import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class PrivateRoute implements CanActivate {
    constructor (private authService: AuthService, private router:Router) {}

  canActivate (): boolean {
    const loggedIn =  this.authService.isLogged
    if(loggedIn){
        return true;
    }
    else{
        this.router.navigate(['/auth/login']);
        return false;
    }
  }
}
