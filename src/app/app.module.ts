import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SchoolExperienceComponent } from './school-experience/school-experience.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ExperienceComponent } from './experience/experience.component';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { InformatiqueSkillsComponent } from './skills/informatique-skills/informatique-skills.component';
import { LanguagesSkillsComponent } from './skills/languages-skills/languages-skills.component';
import { PersonalSkillsComponent } from './skills/personal-skills/personal-skills.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent},
  { path: 'auth', component: AuthComponent}
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
    InformatiqueSkillsComponent,
    LanguagesSkillsComponent,
    PersonalSkillsComponent,
    AuthComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
