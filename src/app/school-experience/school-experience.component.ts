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
      'https://dauphine.psl.eu/formations/masters/informatique/m1-methodes-informatiques-appliquees-a-la-gestion-des-entreprises',
      2021,
      2023,
      'Programmation Web, Systèmes d\'Information, Décision multicritère, Machine Learning, Programmation Orientée Objet, Marchés financier',
      'https://upload.wikimedia.org/wikipedia/commons/6/6f/Dauphine_logo_2019_-_Bleu.png'
      ),
    new School (
      'Université Paris Dauphine - PSL',
      'Licence MIAGE',
      'https://dauphine.psl.eu/formations/licences/informatique-des-organisations/l3-methodes-informatiques-appliquees-pour-la-gestion-des-entreprises',
      2019,
      2021,
      'Java, Bases de données, Gestion de projets, Algorithmes, Réseaux, Intelligence Artificielle, Systèmes d\'exploitation, Communication',
      'https://upload.wikimedia.org/wikipedia/commons/6/6f/Dauphine_logo_2019_-_Bleu.png'
      ),
    new School(
      'Université Paris 1 Panthéon-Sorbonne',
      'Licence 1 MIASHS',
      'https://formations.pantheonsorbonne.fr/fr/catalogue-des-formations/licence-L/licence-mathematiques-et-informatique-appliquees-aux-sciences-humaines-et-sociales-KBTEXDIC/licence-miashs-parcours-miage-informatique-formation-initiale-KBTEZZCR.html',
      2018,
      2019,
      'Fondement des mathématiques, Introduction aux théories économiques, Python, Probabilités, Analyse réelle, Algèbre linéaire',
      'https://formations.pantheonsorbonne.fr/skins/up1/resources/templates/common/img/logo-header.svg'
      ),
    new School(
      'Lycée Sainte Ursule, Paris 17', 
      'Baccalauréat scientifique',
      'https://ste-ursule.com/',
      2015, 
      2018, 
      'Spécialité mathématiques, mention Très Bien', 
      'http://ste-ursule.com/wp-content/uploads/2018/09/groupe.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
