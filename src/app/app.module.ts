import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SchoolExperienceComponent } from './school-experience/school-experience.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    SchoolExperienceComponent,
    WorkExperienceComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
