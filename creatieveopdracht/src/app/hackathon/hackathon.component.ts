import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import * as L from 'leaflet';

@Component({
  selector: 'app-hackathon',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './hackathon.component.html',
  styleUrl: './hackathon.component.css'
})
export class HackathonComponent implements OnInit {
  private map: L.Map | undefined;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('hackathon-map').setView([51.5074, -0.1278], 13); // Example: London

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: 'marker.svg',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    L.marker([51.5074, -0.1278], { icon: customIcon }).addTo(this.map)
      .bindPopup('Hackathon Location')
      .openPopup();
  }
}
