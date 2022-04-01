import { Component, OnInit } from '@angular/core';
import { Work } from './work.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  works: Work[] = [
    new Work(
      'BNP Paribas - CIB',
      'Developpeur back-end',
      'https://cib.bnpparibas/',
      'Juin 2021',
      'Juillet 2021',
      'Familiarisation avec l\'environnement de développeur ; Programmation d\'un service de monitoring ; Découverte de la méthode Agile',
      'https://tinyurl.com/yubfwccr'
    ),

    new Work(
      'City One',
      'Hôte d\'accueil',
      'https://www.cityone.fr/',
      'Juin 2019',
      'Juillet 2019',
      'Accueillir, orienter, et guider des clients',
      'https://tinyurl.com/56c8jswp'
    )
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
