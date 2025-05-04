import { Component, ElementRef, ViewChild } from '@angular/core';
import { SvgIconComponent } from '../../components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-to-top-btn',
  templateUrl: './to-top-btn.component.html',
  styleUrls: ['./to-top-btn.component.scss'],
  imports: [SvgIconComponent],
})
export class ToTopBtnComponent {
  @ViewChild('linkToTop') linkToTop: ElementRef | undefined;
  scrollToTop() {
    this.linkToTop?.nativeElement.click();
  }
}
