import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRoutingModule } from './application-routing.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [ProfileComponent],
  imports: [ApplicationRoutingModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
