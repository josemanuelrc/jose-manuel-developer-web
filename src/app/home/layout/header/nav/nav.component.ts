import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { SvgIconComponent } from 'src/app/home/components/svg-icon/svg-icon.component';
import { NavDropComponent } from './nav-drop/nav-drop.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [NgClass, SvgIconComponent, NavDropComponent],
})
export class NavComponent {
  @ViewChild('navDropList') navDropList: ElementRef | undefined;
  @ViewChild('navBar') navBar: ElementRef | undefined;

  isMenuOpen;

  constructor() {
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
