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
import { ReportsComponent } from './reports/reports.component';
import { ReportOneComponent } from './reports/report-one/report-one.component';
import { ReportTwoComponent } from './reports/report-two/report-two.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Report3Component } from './reports/report3/report3.component';
import { Report4Component } from './reports/report4/report4.component';
import { Report5Component } from './reports/report5/report5.component';
import { Report6Component } from './reports/report6/report6.component';
import { Report7Component } from './reports/report7/report7.component';
import { Report8Component } from './reports/report8/report8.component';
import { Report9Component } from './reports/report9/report9.component';
import { Report10Component } from './reports/report10/report10.component';



@NgModule({
  declarations: [ProfileComponent, OnLoginComponent, SearchMatchesComponent, MyMatchesComponent, ProfileFormComponent, ProfilePreviewComponent, ReportsComponent, ReportOneComponent, ReportTwoComponent, Report3Component, Report4Component, Report5Component, Report6Component, Report7Component, Report8Component, Report9Component, Report10Component],
  imports: [ApplicationRoutingModule, AngularMaterialModule, CommonModule, FormsModule, ReactiveFormsModule, NgxChartsModule ],
  exports: [RouterModule, OnLoginComponent]
})
export class ApplicationModule { }
