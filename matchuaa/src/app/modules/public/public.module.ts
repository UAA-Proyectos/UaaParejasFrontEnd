import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { PublicRoutingModule } from './public-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { PublicRoute } from '../auth/private-route';
import { AngularMaterialModule } from 'src/app/angular-material.module';



@NgModule({
  providers:[ 
    PublicRoute
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    HelpComponent,
    NavbarComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PublicRoutingModule,
    FormsModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class PublicModule { }
