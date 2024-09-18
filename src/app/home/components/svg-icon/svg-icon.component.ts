import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css'],
  standalone: true,
})
export class SvgIconComponent implements OnInit {
  @Input() svgName!: string; // Nombre del archivo SVG
  @Input() svgColor = 'currentColor'; // Color por defecto
  svgContent: SafeHtml = '';

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.loadSvg();
  }

  private loadSvg(): void {
    const filePath = `assets/svgs/${this.svgName}.svg`;
    this.http.get(filePath, { responseType: 'text' }).subscribe(
      (svgData) => {
        // Sanitizamos el SVG para evitar problemas de seguridad
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgData);
      },
      (error) => {
        console.error(`Error al cargar el SVG: ${filePath}`, error);
      }
    );
  }
}
