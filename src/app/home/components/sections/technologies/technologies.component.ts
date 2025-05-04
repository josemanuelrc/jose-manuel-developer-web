import { Component } from '@angular/core';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';
import { ScrollSpyDirective } from 'src/app/core/directives/ScrollSpy.directive';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  standalone: true,
  imports: [SvgIconComponent, ScrollSpyDirective],
})
export class TechnologiesComponent {
  technologies = [
    { name: 'HTML', svgName: 'tech/html', svgColor: 'white' },
    { name: 'CSS', svgName: 'tech/css', svgColor: 'white' },
    { name: 'JavaScript', svgName: 'tech/javascript', svgColor: 'white' },
    { name: 'TypeScript', svgName: 'tech/typescript', svgColor: 'white' },
    { name: 'Node.JS', svgName: 'tech/nodejs', svgColor: 'white' },
    { name: 'Angular', svgName: 'tech/angular', svgColor: 'white' },
    { name: 'RxJs', svgName: 'tech/rxjs', svgColor: 'white' },
    { name: 'NgRx', svgName: 'tech/ngrx', svgColor: 'white' },
    { name: 'Java', svgName: 'tech/java', svgColor: 'white' },
    { name: 'Spring', svgName: 'tech/spring', svgColor: 'white' },
    { name: 'Spring Boot', svgName: 'tech/springboot', svgColor: 'white' },
    { name: 'Docker', svgName: 'tech/docker', svgColor: 'white' },
    { name: 'AWS', svgName: 'tech/aws', svgColor: 'white' },
    { name: 'MySQL', svgName: 'tech/mysql', svgColor: 'white' },
    { name: 'PostgreSQL', svgName: 'tech/postgresql', svgColor: 'white' },
  ];
}
