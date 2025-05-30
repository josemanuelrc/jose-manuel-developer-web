import { Component, ElementRef, ViewChild } from '@angular/core';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';
import { ScrollSpyDirective } from 'src/app/core/directives/ScrollSpy.directive';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    imports: [SvgIconComponent, ScrollSpyDirective]
})
export class TitleComponent {
  @ViewChild('link') link: ElementRef | undefined;

  downloadFile() {
    this.link?.nativeElement.click();
  }
}
