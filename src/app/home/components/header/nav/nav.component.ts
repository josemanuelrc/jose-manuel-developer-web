import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [NgClass, SvgIconComponent],
})
export class NavComponent {
  @ViewChild('navDropList') navDropList: ElementRef | undefined;
  @ViewChild('navBar') navBar: ElementRef | undefined;

  isMenuOpen = false;

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
