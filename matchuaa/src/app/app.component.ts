import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'matchuaa';

  loogedIn: boolean = false
  constructor(private router: Router, private authService: AuthService) {

  }

  isPrivatePage(): boolean {
    return (this.router.url.includes("/auth") || this.router.url.includes("/app"))
  }

  isAuthPage(): boolean {
    return (this.router.url.includes("/auth"))
  }
}
