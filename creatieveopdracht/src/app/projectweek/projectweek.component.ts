import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-projectweek',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './projectweek.component.html',
  styleUrl: './projectweek.component.css'
})
export class ProjectweekComponent implements OnInit{
  private map: L.Map | undefined;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('projectweek-map').setView([50.9311, 5.3956], 13); // Digital PXL - Elfde Liniestraat

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: 'marker.svg',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    L.marker([50.9355, 5.3436], { icon: customIcon }).addTo(this.map)
      .bindPopup('Digital PXL - Elfde Liniestraat')
      .openPopup();
  }
}
