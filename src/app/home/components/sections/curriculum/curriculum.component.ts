import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
  standalone: true,
})
export class CurriculumComponent {
  @ViewChild('link', { static: false }) link: ElementRef | undefined;

  downloadFile() {
    this.link?.nativeElement.click();
  }
}
