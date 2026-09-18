import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  standalone: true,
})
export class SvgIconComponent implements OnInit {
  @Input() svgName!: string;
  @Input() svgColor = '';

  svgContent = signal<SafeHtml>('');

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.loadSvg();
  }

  private loadSvg(): void {
    const filePath = `assets/svgs/${this.svgName}.svg`;

    this.http.get(filePath, { responseType: 'text' }).subscribe({
      next: (svgData) => {
        this.svgContent.set(this.sanitizer.bypassSecurityTrustHtml(svgData));
      },
      error: (error) => {
        console.error(`Error al cargar el SVG: ${filePath}`, error);
      },
    });
  }
}
