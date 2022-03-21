import { Component, OnInit } from '@angular/core';
import { School } from './school.model';

@Component({
  selector: 'app-school-experience',
  templateUrl: './school-experience.component.html',
  styleUrls: ['./school-experience.component.css']
})
export class SchoolExperienceComponent implements OnInit {

  schools: School[] = [
    new School(
      'Université Paris Dauphine - PSL',
      'Master MIAGE',
      'https://tinyurl.com/ycks8yvh',
      2021,
      2023,
      'Programmation Web, Systèmes d\'Information, Décision multicritère, Machine Learning, Programmation Orientée Objet, Marchés financier',
      'https://tinyurl.com/4jhx7nnt'
      ),
    new School (
      'Université Paris Dauphine - PSL',
      'Licence MIAGE',
      'https://tinyurl.com/ykjn7fxd',
      2019,
      2021,
      'Java, Bases de données, Gestion de projets, Algorithmes, Réseaux, Intelligence Artificielle, Systèmes d\'exploitation, Communication',
      'https://tinyurl.com/4jhx7nnt'
      ),
    new School(
      'Université Paris 1 Panthéon-Sorbonne',
      'Licence 1 MIASHS',
      'https://tinyurl.com/3sd789e4',
      2018,
      2019,
      'Fondement des mathématiques, Introduction aux théories économiques, Python, Probabilités, Analyse réelle, Algèbre linéaire',
      'https://tinyurl.com/mr2y85nk'
      ),
    new School(
      'Lycée Sainte Ursule, Paris 17', 
      'Baccalauréat scientifique',
      '#',
      2015, 
      2018, 
      'Spécialité mathématiques, mention Très Bien', 
      'https://tinyurl.com/25wpn998')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
