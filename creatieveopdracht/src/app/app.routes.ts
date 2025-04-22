import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ActivitiesComponent} from './activities/activities.component';
import {SelectieComponent} from './selectie/selectie.component';
import {BusItComponent} from './bus-it/bus-it.component';
import {HackathonComponent} from './hackathon/hackathon.component';
import {ProjectweekComponent} from './projectweek/projectweek.component';
import {EindreflectieComponent} from './eindreflectie/eindreflectie.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'activiteiten', component: ActivitiesComponent },
  { path: 'selectie', component: SelectieComponent },
  { path: 'selectie/busit', component: BusItComponent },
  { path: 'selectie/hackathon', component: HackathonComponent },
  { path: 'selectie/projectweek', component: ProjectweekComponent },
  { path: 'EindReflectie', component: EindreflectieComponent },
];

