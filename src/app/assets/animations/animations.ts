import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInLeft = trigger('fadeInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-30px)' }),
    animate('500ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);
