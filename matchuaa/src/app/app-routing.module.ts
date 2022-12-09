import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoute, PrivateRoute, PublicRoute } from './modules/auth/private-route';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./modules/public/public.module').then((m) => m.PublicModule), canActivate: [PublicRoute],  
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule), canActivate: [AuthRoute]
  },
  {
    path: 'app',
    loadChildren: () => import('./modules/application/application.module').then((m) => m.ApplicationModule), canActivate: [PrivateRoute]
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
