import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ScrollSpyService } from '../services/scrollSpy.service';

@Directive({
  standalone: true,
  selector: '[appScrollSpy]',
})
export class ScrollSpyDirective implements OnInit, OnDestroy {
  @Input({ required: true }) sectionId!: string;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private scrollSpy: ScrollSpyService) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.scrollSpy.setActiveSection(this.sectionId);
        }
      },
      { threshold: 0.6 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
