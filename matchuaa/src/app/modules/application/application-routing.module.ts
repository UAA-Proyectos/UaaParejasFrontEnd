import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{
  path: 'edit-profile',
  component: ProfileComponent
},
{
  path: '',
  redirectTo: '/app/edit-profile',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/app/edit-profile'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
