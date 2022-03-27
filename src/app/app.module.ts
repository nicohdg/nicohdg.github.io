import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SchoolExperienceComponent } from './school-experience/school-experience.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ExperienceComponent } from './experience/experience.component';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent}
];

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    SchoolExperienceComponent,
    WorkExperienceComponent,
    ExperienceComponent,
    SkillsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
