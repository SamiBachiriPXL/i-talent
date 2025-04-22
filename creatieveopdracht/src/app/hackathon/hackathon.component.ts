import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-hackathon',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './hackathon.component.html',
  styleUrl: './hackathon.component.css'
})
export class HackathonComponent {

}
