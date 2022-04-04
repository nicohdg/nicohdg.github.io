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
      'https://logos-download.com/wp-content/uploads/2016/04/BNP_Paribas_logo_logotype_emblem.png'
    ),

    new Work(
      'City One',
      'Hôte d\'accueil',
      'https://www.cityone.fr/',
      'Juin 2019',
      'Juillet 2019',
      'Accueillir, orienter, et guider des clients',
      'https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/224885085_286465016590387_7023806066208986351_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=27fnSzk2SnEAX9tnWg6&_nc_ht=scontent-cdt1-1.xx&oh=00_AT8Hm8Vi_nPR7HpQZhDiltd2PlJG-Z6VK4MSKtvJTAHjAg&oe=624AFE27'
    )
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
