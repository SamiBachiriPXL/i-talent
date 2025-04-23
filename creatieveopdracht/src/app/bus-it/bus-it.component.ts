import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import * as L from 'leaflet';

@Component({
  selector: 'app-bus-it',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './bus-it.component.html',
  styleUrl: './bus-it.component.css'
})
export class BusItComponent implements OnInit {
  private map: L.Map | undefined;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.4975, -3.1791], 13); // Coordinates for Cardiff Metropolitan University

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: 'marker.svg', // Path to your custom marker icon
      iconSize: [32, 32], // Size of the icon
      iconAnchor: [16, 32], // Anchor point of the icon
      popupAnchor: [0, -32] // Position of the popup relative to the icon
    });

    L.marker([51.4975, -3.1791], { icon: customIcon }).addTo(this.map)
      .bindPopup('Cardiff Metropolitan University')
      .openPopup();
  }
}
