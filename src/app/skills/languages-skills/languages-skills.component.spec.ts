import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesSkillsComponent } from './languages-skills.component';

describe('LanguagesSkillsComponent', () => {
  let component: LanguagesSkillsComponent;
  let fixture: ComponentFixture<LanguagesSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
