import { Component } from '@angular/core';
import { fadeInLeft } from 'src/app/assets/animations/animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,
  animations: [fadeInLeft],
})
export class EducationComponent {
  titles: TitleItem[] = [
    {
      title: 'Grado en Ingeniería Informática',
      period: '2016 - 2021',
      institution: 'Universidad de Huelva',
      description: 'T.F.G.: Arquitectura de Computador basada en Acumulador',
    },
    {
      title: 'Bachillerato Bilingüe, Ciencias y Tecnologías',
      period: '2014 - 2016',
      institution: 'I.E.S. Catedrático Pulido Rubio',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum eius blanditiis dolorum reprehenderit asperiores
                    pariatur, non libero aspernatur omnis. Dolores quod cum
                    delectus eligendi qui nobis commodi nesciunt voluptas sit.`,
    },
  ];

  courses: CourseItem[] = [
    {
      title: 'Curso de Angular',
      period: '2022',
      institution: 'Academia XYZ',
      description: 'Descripción del curso.',
    },
    {
      title: 'Curso de React',
      period: '2023',
      institution: 'Academia ABC',
      description: 'Descripción del curso.',
    },
  ];

  languages = [
    {
      name: 'Español',
      level: 'Nativo',
      description: 'Idioma ',
    },
    {
      name: 'Inglés',
      level: 'B2',
      description: 'Competente en comunicación verbal y escrita.',
    },
  ];
}

interface TitleItem {
  title: string;
  period: string;
  institution: string;
  description: string;
}

interface CourseItem {
  title: string;
  period: string;
  institution: string;
  description: string;
}
