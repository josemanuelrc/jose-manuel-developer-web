import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/sections/title/title.component';
import { AboutMeComponent } from './components/sections/about-me/about-me.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { TechnologiesComponent } from './components/sections/technologies/technologies.component';
import { EducationComponent } from './components/sections/education/education.component';
import { CurriculumComponent } from './components/sections/curriculum/curriculum.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
        NgClass,
        HeaderComponent,
        TitleComponent,
        AboutMeComponent,
        ExperienceComponent,
        TechnologiesComponent,
        EducationComponent,
        CurriculumComponent,
        ContactComponent,
        FooterComponent,
    ],
})
export class HomeComponent implements OnInit, OnDestroy {
  // Web Theme
  public theme: string = '';
  // Web Theme Subscription
  private themeSubscription: Subscription;

  constructor(private themeService: ThemeService) {
    this.themeSubscription = this.themeService
      .getTheme$()
      .subscribe((theme) => (this.theme = theme));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
