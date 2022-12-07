import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { UserProfile } from 'src/app/models/user';
import { UserServiceService } from '../user-service.service';


@UntilDestroy()
@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss']
})
export class ProfilePreviewComponent implements OnInit {

  user: UserProfile | null = null

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.currentUserProfile$
      .pipe(untilDestroyed(this), tap(console.log))
      .subscribe((user) => {
        this.user = user;

      });
  }

  getUserProfile() {
    this.userService.currentUserProfile$.pipe()
  }

}
