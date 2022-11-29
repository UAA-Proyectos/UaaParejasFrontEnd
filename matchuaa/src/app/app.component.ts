import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'matchuaa';

  constructor(private router: Router) {

  }

  isPrivatePage(): boolean {
    return  (this.router.url.includes("/auth") || this.router.url.includes("/app")) 
  }
}
