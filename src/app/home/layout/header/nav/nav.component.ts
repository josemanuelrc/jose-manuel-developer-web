import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  HostListener,
  inject,
} from '@angular/core';
import { SvgIconComponent } from 'src/app/home/components/svg-icon/svg-icon.component';
import { NavDropComponent } from './nav-drop/nav-drop.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ScrollSpyService } from 'src/app/core/services/scrollSpy.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    imports: [SvgIconComponent, NavDropComponent, AsyncPipe],
    animations: [
        trigger('toggleMenu', [
            state('open', style({
                transform: 'translateY(0)',
            })),
            state('closed', style({
                transform: 'translateY(-400px)',
            })),
            transition('open <=> closed', [
                animate('300ms ease-in-out'), // Duración y curva de animación
            ]),
        ]),
    ]
})
export class NavComponent implements OnInit {
  @ViewChild('navDropList') navDropList: ElementRef | undefined;
  @ViewChild('navBar') navBar: ElementRef | undefined;

  navItems: NavItem[] = [
    { label: 'Inicio', href: '#', icon: 'home' },
    { label: 'Sobre mí', href: '#about-me', icon: 'info' },
    { label: 'Experiencia', href: '#experience', icon: 'briefcase' },
    { label: 'Tecnologías', href: '#technologies', icon: 'code' },
    { label: 'Formación', href: '#education', icon: 'book' },
    { label: 'Currículum', href: '#curriculum', icon: 'file' },
    { label: 'Contacto', href: '#contact', icon: 'chat' },
  ];

  isMenuOpen = false;
  private elRef = inject(ElementRef);

  scrollSpy: ScrollSpyService = inject(ScrollSpyService);

  ngOnInit() {
    this.onResize(); // Verifica el tamaño inicial
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation(); // Evita que el clic en el botón se propague al documento
    this.isMenuOpen = !this.isMenuOpen;
  }

  onResize() {
    if (window.innerWidth > 1024) {
      this.isMenuOpen = false; // Cierra el menú si la pantalla es mayor a 1024px
    }
  }

  @HostListener('window:resize', ['$event'])
  onResizeEvent() {
    this.onResize(); // Llama a la función de verificación de tamaño
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    // Verifica si el clic está fuera del componente (el nav y su contenido)
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (this.isMenuOpen && !clickedInside) {
      this.isMenuOpen = false; // Cierra el menú si el clic es fuera del nav
    }
  }
}

interface NavItem {
  label: string;
  href: string;
  icon: string;
}
