import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatiqueSkillsComponent } from './informatique-skills.component';

describe('InformatiqueSkillsComponent', () => {
  let component: InformatiqueSkillsComponent;
  let fixture: ComponentFixture<InformatiqueSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformatiqueSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformatiqueSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
