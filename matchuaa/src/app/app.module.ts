import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from "./modules/public/public.module";
import { HttpClientModule } from '@angular/common/http';
import { AdminRoute, AuthRoute, PrivateRoute, PublicRoute } from './modules/auth/private-route';
import { LOCALE_ID, isDevMode } from '@angular/core';
import { ApplicationModule } from './modules/application/application.module';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: LOCALE_ID, useValue: "es-MX" },
        PrivateRoute, AuthRoute, PublicRoute, AdminRoute],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularMaterialModule,
        PublicModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ApplicationModule,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })
    ]
})
export class AppModule { }
