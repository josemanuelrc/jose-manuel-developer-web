import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollSpyDirective } from 'src/app/core/directives/ScrollSpy.directive';

@Component({
    selector: 'app-curriculum',
    templateUrl: './curriculum.component.html',
    styleUrls: ['./curriculum.component.scss'],
    imports: [ScrollSpyDirective]
})
export class CurriculumComponent {
  @ViewChild('link') link: ElementRef | undefined;

  downloadFile() {
    this.link?.nativeElement.click();
  }
}
