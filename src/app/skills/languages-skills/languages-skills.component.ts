import { state, trigger, style, transition, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-languages-skills',
  templateUrl: './languages-skills.component.html',
  styleUrls: ['./languages-skills.component.css'],
  animations: [
    trigger('divState', [
      state('cache', style({
        opacity: 0
      })),
      state('montre', style({
        opacity: 1
      })),
      transition('cache <=> montre', animate(700))
    ])
  ]
})

export class LanguagesSkillsComponent{
  state = 'cache';

  constructor() { }

  onAnimate() {
    this.state == 'cache' ? this.state='montre' : this.state = 'cache';
  }

}
