import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { UserServiceService } from '../user-service.service';

@UntilDestroy()
@Component({
  selector: 'app-on-login',
  templateUrl: './on-login.component.html',
  styleUrls: ['./on-login.component.scss']
})
export class OnLoginComponent implements OnInit {

  public innerWidth: any;

  constructor(public router: Router, private userService: UserServiceService) { }

  isExpanded: boolean = false;

  user$ = this.userService.currentUserProfile$;

  ngOnInit(): void {
    this.userService.currentUserProfile$
      .pipe(untilDestroyed(this), tap(console.log))
      .subscribe((user) => { });

    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
}
