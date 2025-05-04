import { Component } from '@angular/core';
import { fadeInLeft } from 'src/app/assets/animations/animations';
import { ScrollSpyDirective } from 'src/app/core/directives/ScrollSpy.directive';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  standalone: true,
  animations: [fadeInLeft],
  imports: [ScrollSpyDirective],
})
export class AboutMeComponent {}
