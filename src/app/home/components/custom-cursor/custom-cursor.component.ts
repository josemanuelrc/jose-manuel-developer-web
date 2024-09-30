import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss'],
  standalone: true,
})
export class CustomCursorComponent implements AfterViewInit {
  // Coordenadas para el punto y el círculo
  private dotX = 0;
  private dotY = 0;
  private circleX = 0;
  private circleY = 0;

  // Referencias a los elementos
  dot!: HTMLElement;
  circle!: HTMLElement;

  // Tiempo de retraso para el círculo (ms)
  private delay = 0.1;

  // Tolerancia para alinear el círculo con el punto
  private tolerance = 0.5;

  // Escucha los eventos de movimiento del ratón
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.dotX = event.clientX;
    this.dotY = event.clientY;
  }

  ngAfterViewInit() {
    this.dot = document.querySelector('.cursor-dot') as HTMLElement;
    this.circle = document.querySelector('.cursor-circle') as HTMLElement;

    this.animateCursor();
  }

  // Actualiza la posición del cursor continuamente
  animateCursor() {
    const animate = () => {
      // Mueve el punto instantáneamente
      this.dot.style.transform = `translate(${this.dotX}px, ${this.dotY}px)`;

      // Mueve el círculo con retraso y aplica la tolerancia
      const deltaX = this.dotX - this.circleX;
      const deltaY = this.dotY - this.circleY;

      // Solo se mueve el círculo si la distancia es mayor que la tolerancia
      if (
        Math.abs(deltaX) > this.tolerance ||
        Math.abs(deltaY) > this.tolerance
      ) {
        this.circleX += deltaX * this.delay;
        this.circleY += deltaY * this.delay;
      } else {
        this.circleX = this.dotX;
        this.circleY = this.dotY;
      }

      this.circle.style.transform = `translate(${this.circleX}px, ${this.circleY}px)`;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}
