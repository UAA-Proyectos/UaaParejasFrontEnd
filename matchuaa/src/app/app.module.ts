import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from "./modules/public/public.module";
import { HttpClientModule } from '@angular/common/http';
import { AuthRoute, PrivateRoute, PublicRoute } from './modules/auth/private-route';
import { LOCALE_ID } from '@angular/core';
import { ApplicationModule } from './modules/application/application.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: LOCALE_ID, useValue: "es-MX" },
        PrivateRoute, AuthRoute, PublicRoute],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularMaterialModule,
        PublicModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ApplicationModule,
        FormsModule
    ]
})
export class AppModule { }
