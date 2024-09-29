import { Component, ElementRef, ViewChild } from '@angular/core';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  standalone: true,
  imports: [SvgIconComponent],
})
export class TitleComponent {
  @ViewChild('link', { static: false }) link: ElementRef | undefined;

  downloadFile() {
    this.link?.nativeElement.click();
  }
}
