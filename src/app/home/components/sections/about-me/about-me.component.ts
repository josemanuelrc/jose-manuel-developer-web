import { Component } from '@angular/core';
import { fadeInLeft } from 'src/app/assets/animations/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  standalone: true,
  animations: [fadeInLeft],
})
export class AboutMeComponent {}
