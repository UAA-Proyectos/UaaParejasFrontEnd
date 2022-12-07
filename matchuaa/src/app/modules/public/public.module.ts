import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { PublicRoutingModule } from './public-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HelpComponent,
    NavbarComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class PublicModule { }
