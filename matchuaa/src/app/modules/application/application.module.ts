import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRoutingModule } from './application-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OnLoginComponent } from './on-login/on-login.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { CommonModule } from '@angular/common';
import { SearchMatchesComponent } from './search-matches/search-matches.component';
import { MyMatchesComponent } from './my-matches/my-matches.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilePreviewComponent } from './profile-preview/profile-preview.component';



@NgModule({
  declarations: [ProfileComponent, OnLoginComponent, SearchMatchesComponent, MyMatchesComponent, ProfileFormComponent, ProfilePreviewComponent],
  imports: [ApplicationRoutingModule, AngularMaterialModule, CommonModule, FormsModule, ReactiveFormsModule ],
  exports: [RouterModule, OnLoginComponent]
})
export class ApplicationModule { }
