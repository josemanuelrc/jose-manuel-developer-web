import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgIconComponent } from 'src/app/home/components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-nav-drop',
  templateUrl: './nav-drop.component.html',
  styleUrls: ['./nav-drop.component.scss'],
  standalone: true,
  imports: [SvgIconComponent],
})
export class NavDropComponent {
  @Input() isMenuOpen = false;
  @Output() isMenuOpenChange = new EventEmitter<boolean>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOpenChange.emit(this.isMenuOpen);
  }
}
