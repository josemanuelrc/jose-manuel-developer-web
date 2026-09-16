import { Component } from '@angular/core';
import { fadeInLeft } from '@app/assets/animations/animations';
import { ScrollSpyDirective } from '@app/core/directives/ScrollSpy.directive';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [fadeInLeft],
  imports: [ScrollSpyDirective],
})
export class AboutMeComponent {}
