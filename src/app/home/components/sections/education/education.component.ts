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
      description:
        'Ingeniero Informático con Especialidad en Ingenieria de Computadores por \
        la E.T.S.I. de la Universidad de Huelva \n T.F.G.: Arquitectura de Computador \
        basada en Acumulador',
    },
    {
      title: 'Bachillerato en Ciencias y Tecnologías',
      period: '2014 - 2016',
      institution: 'I.E.S. Catedrático Pulido Rubio',
      description: `Título Bachiller en Ciencias y Tecnologías; Grupo bilingüe`,
    },
  ];

  courses: CourseItem[] = [
    {
      title: 'ITIL® v4',
      period: '2024',
      institution: 'PeopleCert',
      description:
        'Certificación ITIL, marco de buenas prácticas para la gestión de servicios\
         de TI',
    },
    {
      title: 'Amazon Web Services: Cloud Practicioner',
      period: '2024',
      institution: 'Soltel Group',
      description:
        'Curso preparatorio para cetificación oficial del proveedor de servicios en \
        la nube',
    },
    {
      title: 'Introducción a MongoDB',
      period: '2024',
      institution: 'Soltel Group',
      description:
        'Curso de MongoDB, base de datos NoSQL orientado a documentos',
    },
    {
      title: 'Scrum Foundation Professional Certificate SFPC v2020',
      period: '2023',
      institution: 'CertiProf',
      description:
        'Certificación en Scrum, marco de gestión de proyectos de metodologías ágiles',
    },
    {
      title: 'Desarrollo de Aplicaciones con Spring',
      period: '2022',
      institution: 'Ayesa',
      description:
        'Curso de desarrollo de aplicaciones web backend con Java y Spring Framework',
    },
    {
      title: 'Angular - The Complete Guide',
      period: '2021',
      institution: 'Udemy',
      description:
        'Curso de desarrollo de aplicaciones web frontend con Angular',
    },
    {
      title: 'NestJS - Desarrollo Backend Moderno con TypeScript',
      period: '2021',
      institution: 'Udemy',
      description:
        'Curso de desarrollo de aplicaciones web backend con Nest.js',
    },
    {
      title: 'Javascript Basics for Begginners',
      period: '2021',
      institution: 'Udemy',
      description: 'Curso de introducción al desarrollo con JavaScript',
    },
  ];

  languages = [
    {
      name: 'Español',
      level: 'Nativo',
      description: 'Idioma nativo',
    },
    {
      name: 'Inglés',
      level: 'B2',
      description: 'Aptis ESOL Advanced',
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
