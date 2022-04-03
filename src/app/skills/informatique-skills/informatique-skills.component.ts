import { state, trigger, style, transition, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informatique-skills',
  templateUrl: './informatique-skills.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: '#AA67B9',
        width: '0px'
      })),
      state('full', style({
        backgroundColor: '#314588',
        width: '{{ level }}'
      }), {params: { level: '10%' } }),
      transition('normal <=> full', animate(300))
    ])
  ]
})
export class InformatiqueSkillsComponent {
  state = 'normal';

  onAnimate() {
    this.state == 'normal' ? this.state='full' : this.state='normal';
  }

  constructor() { }

}
