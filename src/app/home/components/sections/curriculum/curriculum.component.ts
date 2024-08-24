import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
})
export class CurriculumComponent implements OnInit {
  @ViewChild('link', { static: false }) link: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  downloadFile() {
    this.link?.nativeElement.click();
  }
}
