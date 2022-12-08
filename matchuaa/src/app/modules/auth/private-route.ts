import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class PrivateRoute implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    const loggedIn = this.authService.getUserId()
    if (loggedIn != null) {
      return true;
    }
    else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}

@Injectable()
export class AuthRoute implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    const loggedIn = this.authService.getUserId()
    if (loggedIn != null) {
      this.router.navigate(['/app/profile']);
      return false;
    }
    else {
      return true;
    }
  }
}

@Injectable()
export class PublicRoute implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    const loggedIn = this.authService.getUserId()
    if (loggedIn != null) {
      this.router.navigate(['/app/search-match']);
      return false;
    }
    else {
      return true;
    }
  }
}

@Injectable()
export class AdminRoute implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    const user_type = this.authService.getUserType() ??  0
    if (user_type == 0) {
      this.router.navigate(['/app/search-match']);
      return false;
    }
    else {
      return true;
    }
  }
}




