import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-bus-it',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './bus-it.component.html',
  styleUrl: './bus-it.component.css'
})
export class BusItComponent {

}
