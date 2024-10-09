import {
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
  AfterViewInit,
} from '@angular/core';
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
    ToTopBtnComponent,
  ],
})
export class HomeComponent implements OnDestroy, AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef;

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

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    // Intenta reproducir automáticamente
    video.muted = true; //Necesario, si no, no se repoduce
    video.play().catch((error) => {
      console.log('El vídeo no pudo reproducirse automáticamente:', error);
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
