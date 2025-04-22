import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
    NgForOf
  ]
})
export class ActivitiesComponent {
  selectedDomain: string = 'all';

  activities = [
    {
      domain: 'seminaries',
      title: 'CBTW',
      description:
        'Eerst werd er verteld wat design patterns zijn en in welke categorieën ze zijn opgesplitst...',
      location: 'Digital PXL - Elfde Liniestraat 24 Gebouw G G414',
      date: '27 februari 2024 10:00 – 12:00',
    },
    {
      domain: 'seminaries',
      title: 'BIQ',
      description:
        'Deze seminarie ging over code quality en het verbeteren van je code...',
      location: 'Digital PXL - Elfde Liniestraat 24 Gebouw G G414',
      date: '5 maart 2024 9:30 - 12:00',
    },
    {
      domain: 'innovatie',
      title: 'Hackaton: Hacktopia',
      description:
        'Voor deze hackaton moesten wij een kort project maken in een team...',
      location: 'AE, Brightspace, Interleuvenlaan 74, 3001 Leuven',
      date: '01/03/2025, 10u-22u',
    },
    {
      domain: 'persoonlijkeOntwikkeling',
      title: 'POP-sessie 3TIN: My Team and I',
      description: 'Korte omschrijving activiteit...',
      location: 'Locatie onbekend',
      date: 'Datum onbekend',
    },
    {
      domain: 'internationalisering',
      title: 'Internationalisering Activiteit',
      description: 'Korte omschrijving activiteit...',
      location: 'Locatie onbekend',
      date: 'Datum onbekend',
    },
    {
      domain: 'seminaries',
      title: 'BIQ',
      description:
        'Deze seminarie ging over code quality en het verbeteren van je code...',
      location: 'Digital PXL - Elfde Liniestraat 24 Gebouw G G414',
      date: '5 maart 2024 9:30 - 12:00',
    },
    {
      domain: 'seminaries',
      title: 'BIQ',
      description:
        'Deze seminarie ging over code quality en het verbeteren van je code...',
      location: 'Digital PXL - Elfde Liniestraat 24 Gebouw G G414',
      date: '5 maart 2024 9:30 - 12:00',
    },
    {
      domain: 'seminaries',
      title: 'BIQ',
      description:
        'Deze seminarie ging over code quality en het verbeteren van je code...',
      location: 'Digital PXL - Elfde Liniestraat 24 Gebouw G G414',
      date: '5 maart 2024 9:30 - 12:00',
    },
  ];

  get filteredActivities() {
    if (this.selectedDomain === 'all') {
      return this.activities;
    }
    return this.activities.filter(
      (activity) => activity.domain === this.selectedDomain
    );
  }
}
