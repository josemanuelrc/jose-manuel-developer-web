import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { TitleComponent } from './components/sections/title/title.component';
import { AboutMeComponent } from './components/sections/about-me/about-me.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { TechnologiesComponent } from './components/sections/technologies/technologies.component';
import { EducationComponent } from './components/sections/education/education.component';
import { CurriculumComponent } from './components/sections/curriculum/curriculum.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToTopBtnComponent } from './layout/to-top-btn/to-top-btn.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
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
        ToTopBtnComponent,
    ]
})
export class HomeComponent implements OnDestroy {
  private themeService = inject(ThemeService);

  // Web Theme
  public theme = '';
  // Web Theme Subscription
  private themeSubscription: Subscription;

  constructor() {
    this.themeSubscription = this.themeService
      .getTheme$()
      .subscribe((theme) => (this.theme = theme));
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
