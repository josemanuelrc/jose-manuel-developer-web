import { Component } from '@angular/core';
import { ScrollSpyDirective } from '@app/core/directives/ScrollSpy.directive';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  imports: [ScrollSpyDirective],
})
export class AboutMeComponent {}
