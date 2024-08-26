import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: true,
    imports: [NgClass],
})
export class NavComponent implements OnInit {
  @ViewChild('navDropList') navDropList: ElementRef | undefined;
  @ViewChild('navBar') navBar: ElementRef | undefined;

  isMenuOpen = false;

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  clickedOut(event: MouseEvent) {
    if (this.isMenuOpen && !this.navBar?.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }
}
