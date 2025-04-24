import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
    NgClass
  ]
})
export class ActivitiesComponent {
  selectedDomain: string = 'all';

  activities = [
    {
      domain: 'seminaries',
      title: 'CBTW/Positive Thinking Company: CQRS with MediatR',
      description: 'Introductie tot design patterns en CQRS.',
      location: 'Digital PXL - Elfde Liniestraat 24 Gebouw G G414',
      date: '27 februari 2024, 3u',
    },
    {
      domain: 'seminaries',
      title: 'BIQ: Het nut van pull requests en code review in een product development lifecycle',
      description: 'Codekwaliteit verbeteren met SonarQube.',
      location: 'Digital PXL - Elfde Liniestraat 24 Gebouw G G414',
      date: '5 maart 2024, 3u',
    },
    {
      domain: 'seminaries',
      title: 'Tobania: Scrum – a new programming language',
      description: 'Overzicht van SCRUM en de programmeertaal.',
      location: 'Digital PXL - Elfde Liniestraat 24 Gebouw G G414',
      date: '30 april 2024, 3u',
    },
    {
      domain: 'seminaries',
      title: 'Harmony group: Outsystems',
      description: 'OutSystems gebruiken voor GenAI en AR.',
      location: 'Digital PXL - Elfde Liniestraat 24 Gebouw G G412a',
      date: '7 mei 2024, 3u',
    },
    {
      domain: 'seminaries',
      title: 'IBM: Discover the meeting point of GenAI, Prompt Engineering and Quantum Computing',
      description: 'AI, machine learning en quantum computing.',
      location: 'Corda 7 - CC712',
      date: '6 november 2024, 3u',
    },
    {
      domain: 'seminaries',
      title: 'Nocomputer: prompt engineering',
      description: 'Hoe AI werkt en effectieve prompts schrijven.',
      location: 'Corda 7 - CC714',
      date: '23 oktober 2024, 3u',
    },
    {
      domain: 'seminaries',
      title: 'The value hub: How to facilitate a workshop',
      description: 'Sprints gebruiken voor een webshop.',
      location: 'Corda 7 - CC713',
      date: '4 december 2024, 3u',
    },
    {
      domain: 'seminaries',
      title: 'AE: State management for Angular',
      description: 'State management in Angular met signals.',
      location: 'Corda 7 - CC712',
      date: '11 december 2024, 3u',
    },
    {
      domain: 'seminaries',
      title: 'Kabisa: Gebruik van AI in softwareontwikkeling',
      description: 'LLM, ADR’s en AI-ontwikkeltips.',
      location: 'Digital PXL - Elfde Liniestraat 24 Gebouw G G414',
      date: '14 mei 2024, 3u',
    },

    // Innovatie
    {
      domain: 'innovatie',
      title: 'Innovatieroute: Domain Driven Design',
      description: 'Workshop van drie dagen over DDD.',
      location: 'Corda 7 - CC713',
      date: '24/09/2024, 01/10/2024, 8/10/2024, 25u',
    },
    {
      domain: 'innovatie',
      title: 'Hackaton: Hacktopia – Terraforming your future',
      description: 'Teamproject over terraforming.',
      location: 'Interleuvenlaan 74, 3001 Leuven',
      date: '1/03/2025, 12u',
    },

    // Persoonlijke Ontwikkeling
    {
      domain: 'persoonlijkeOntwikkeling',
      title: 'Projectweek 2TIN',
      description: 'Onderzoeksproject om teamwork te versterken.',
      location: 'Digital PXL - Elfde Liniestraat',
      date: '12/02/2024 – 16/02/2024, 2u',
    },
    {
      domain: 'persoonlijkeOntwikkeling',
      title: 'POP-sessie 2TIN: Popping',
      description: 'Feedback geven en ontvangen.',
      location: 'Digital PXL - Elfde Liniestraat',
      date: '20/02/2024 – 05/03/2024, 2u',
    },
    {
      domain: 'persoonlijkeOntwikkeling',
      title: 'POP-sessie 2TIN: Brein aan het werk! Niet storen!',
      description: 'Verslaving en Eisenhower-matrix.',
      location: 'Digital PXL - Elfde Liniestraat',
      date: '20/02/2024 – 18/03/2024, 2u',
    },
    {
      domain: 'persoonlijkeOntwikkeling',
      title: 'POP-sessie 3TIN: My Team and I',
      description: 'Teambuilding om samenwerking te verbeteren.',
      location: 'Digital PXL - Elfde Liniestraat',
      date: '16/10/2024 – 22/10/2024, 2u',
    },

    // Internationalisering
    {
      domain: 'internationalisering',
      title: 'Bus-IT metropolitan Cardiff',
      description: 'Mockup-app om de maatschappij te verbeteren.',
      location: 'Metropolitan Cardiff Wales',
      date: '07/04/2024 – 12/04/2024, 30u',
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
