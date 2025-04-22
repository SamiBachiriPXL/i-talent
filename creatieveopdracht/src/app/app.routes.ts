import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ActivitiesComponent} from './activities/activities.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'activiteiten', component: ActivitiesComponent },
];

