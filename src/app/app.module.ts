import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { ThemeToggleSliderComponent } from './home/components/footer/theme-toggle-slider/theme-toggle-slider.component';
import { AboutMeComponent } from './home/components/sections/about-me/about-me.component';
import { TechnologiesComponent } from './home/components/sections/technologies/technologies.component';
import { ExperienceComponent } from './home/components/sections/experience/experience.component';
import { CurriculumComponent } from './home/components/sections/curriculum/curriculum.component';
import { ContactComponent } from './home/components/sections/contact/contact.component';
import { TitleComponent } from './home/components/sections/title/title.component';
import { HeaderComponent } from './home/components/header/header.component';
import { NavComponent } from './home/components/header/nav/nav.component';
import { EducationComponent } from './home/components/sections/education/education.component';
import { LangSelectorComponent } from './home/components/footer/lang-selector/lang-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ThemeToggleSliderComponent,
    LangSelectorComponent,
    TitleComponent,
    AboutMeComponent,
    TechnologiesComponent,
    ExperienceComponent,
    EducationComponent,
    CurriculumComponent,
    ContactComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
