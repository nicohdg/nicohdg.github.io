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
      '-Familiarisation avec l\'environnement de développeur ; Programmation d\'un service de monitoring ; Découverte de la méthode Agile',
      'https://tinyurl.com/yubfwccr'
    )
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
