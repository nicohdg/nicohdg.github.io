import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-skills',
  templateUrl: './personal-skills.component.html'
})
export class PersonalSkillsComponent {
  competence = '';
  competences = [
    'Méthode Agile',
    'Patience',
    'Détermination',
    'Discretion'
  ];

  constructor() { }

  onButton() {
    this.competences.push(this.competence);
  }

  onNewSkill(event: Event) {
    this.competence = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
}
