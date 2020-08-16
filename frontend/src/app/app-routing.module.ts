import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { SchedulesComponent } from './pages/schedules/schedules.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'schedules', component: SchedulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
