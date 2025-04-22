import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-selectie',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './selectie.component.html',
  styleUrl: './selectie.component.css'
})
export class SelectieComponent {
  constructor(private router: Router) {}

  navigateTo(activity: string): void {
    this.router.navigate([`/${activity}`]);
  }
}
