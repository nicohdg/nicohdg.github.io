import { Component, OnInit } from '@angular/core';
import { School } from './school/school.model';

@Component({
  selector: 'app-school-experience',
  templateUrl: './school-experience.component.html',
  styleUrls: ['./school-experience.component.css']
})
export class SchoolExperienceComponent implements OnInit {

  schools: School[] = [
    new School (
      'Université Paris Dauphine',
      'Licence MIAGE',
      2019,
      2021,
      'Java, Bases de données, Gestion de projets, Algorithmes, Réseaux, Intelligence Artificielle, Systèmes d\'exploitation, Communication',
      'https://upload.wikimedia.org/wikipedia/commons/6/6f/Dauphine_logo_2019_-_Bleu.png'
    ),
    new School(
      'Université Paris 1 Panthéon-Sorbonne',
      'Licence 1 MIASHS',
      2018,
      2019,
      'Fondement des mathématiques, Introduction aux théories économiques, Python, Probabilités, Analyse réelle, Algèbre linéaire',
      'https://formations.pantheonsorbonne.fr/skins/up1/resources/templates/common/img/logo-header.svg'
      ),
    new School(
      'Sainte Ursule', 
      'Baccalauréat scientifique', 
      2015, 
      2018, 
      'Spécialité mathématiques, mention Très Bien', 
      'http://ste-ursule.com/wp-content/uploads/2018/09/groupe.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
