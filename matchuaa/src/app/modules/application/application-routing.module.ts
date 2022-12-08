import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoute } from '../auth/private-route';
import { MyMatchesComponent } from './my-matches/my-matches.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { SearchMatchesComponent } from './search-matches/search-matches.component';


const routes: Routes = [{
  path: 'profile',
  component: ProfileComponent
},
{
  path: 'search-match',
  component: SearchMatchesComponent
},
{
  path: 'reports',
  component: ReportsComponent, canActivate: [AdminRoute]
},
{
  path: 'my-matches',
  component: MyMatchesComponent
},
{
  path: '',
  redirectTo: '/app/profile',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/app/profile'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
