import { Component } from '@angular/core';
import { fadeInLeft } from 'src/app/assets/animations/animations';
import { ScrollSpyDirective } from 'src/app/core/directives/ScrollSpy.directive';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  animations: [fadeInLeft],
  imports: [ScrollSpyDirective],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Desarrollador FrontEnd',
      company: 'Centro de Observación y Teledetección Espacial (COTESA)',
      period: '2024 - Actualidad',
      description: [
        '• Diseño y Desarrollo de nueva versión del Sistema de Información de la Red de Carreteras de Andalucía (CONSICA).',
      ],
    },
    {
      title: 'Desarrollador Backend',
      company: 'TEMPE Inditex',
      period: '2024 - 2024',
      description: [
        '• Diseño y Desarrollo de Sistema de Gestión de referencias e inventario.',
      ],
      technologies: [
        'Java',
        'Spring',
        'SpringBoot',
        'Microservicios',
        'Swagger',
        'JPA/Hibernate',
        'MySQL',
        'Git',
        'GitHub',
      ],
    },
    {
      title: 'Desarrollador Web Full-Stack',
      company: 'SOLTEL Group',
      period: '2023 - 2024',
      description: [
        '• Diseño y Desarrollo de Portal Web para Datalake de IFAPA - Catálogo de Datos Científicos Abierto.',
        '• Entre mis funciones residen la toma de los distintos requerimientos, el diseño y análisis de la \
        mejor solución a aplicar y la posterior implementación de las funcionalidades requeridas en las \
        diversas pantallas del portal.',
        '• Ejerzo de responsable FrontEnd, velando por que se sigan las mejores prácticas posibles, tal como \
        Clean Code, SOLID, etc... manteniendo en todo momento un código altamente escalable y eficiente.',
        '• Eventualmente ostento el rol de Scrum Master, coordinando algunas reuniones: dailys, retrospectivas \
        y plannings de las tareas a realizar en los sprints',
        '• También suelo colaborar activamente con el equipo de BackEnd para lograr un mayor entendimiento \
        del dominio del problema y aportar ideas y soluciones efectivas entre ambos.',
        '• Docencia como profesor en curso de desarrollo web y dispositivos móviles, como parte del plan \
        INNOVA, impartiendo el módulo de Angular (Componentes, Directivas, Módulos, Observables, etc... ) \
        y Spring (API REST, Maven, JPA/Hibernate, MySQL, etc...)',
      ],
      technologies: [
        'HTML',
        'SCSS',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Angular',
        'RxJs',
        'NgRx',
        'Java',
        'Spring',
        'SpringBoot',
        'Microservicios',
        'Swagger',
        'JPA/Hibernate',
        'SQL',
        'MySQL',
        'Git',
        'GitLab',
      ],
    },
    {
      title: 'Desarrollador Web Full-Stack',
      company: 'Ayesa Advanced Technologies',
      period: '2022 - 2023',
      description: [
        '• Diseño y Desarrollo de Simulador de Ejecución Presupuestaria (SEPRE) para la Junta de Andalucía \
        como parte del proyecto GOTA.',
        '• Entre mis responsabilidades se hallaban el desarrollo integral de las funcionalidades requeridas, \
        incluidas todas las fases del proceso, tanto en el Backend como en el FrontEnd, ejecutando la solución \
        bajo una arquitectura de micro-servicios que incluía un BFF en conjunto con una basada en Angular para \
        el FrontEnd.',
        '• A destacar, entre otras tareas: análisis de requisitos y propuesta de soluciones, modelado y \
        normalización de la bases de datos, desarrollo y documentación de lógica de negocio necesaria, extracción \
        de grandes cantidades de datos de archivos estaticos, creación, testeo y consumo de los distintos endpoints de los \
        microservicios, maquetación y creación de componentes, pantallas, etc...',
        '• Como parte de mi formación, realice sendos cursos sobre Angular y Spring',
      ],
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Angular',
        'RxJs',
        'Bootstrap',
        'Java',
        'Spring',
        'SpringBoot',
        'Microservicios',
        'Swagger',
        'JUnit',
        'JPA/Hibernate',
        'SQL',
        'PL/SQL',
        'Oracle',
        'Git',
        'GitLab',
      ],
    },
    {
      title: 'Programador Junior',
      company: 'SGRSoft',
      period: '2022 - 2022',
      description: [
        '• Diseño y Desarrollo de aplicación de registro horario en entorno .NET.',
      ],
      technologies: ['C#', '.NET Core', '.NET Framework', 'SQL', 'SQLServer'],
    },
    {
      title: 'Desarrollador Web Full-Stack',
      company: 'Chapham Software Studio',
      period: '2021 - 2021',
      description: [
        '• Desarrollo de aplicación web para gestión de empresas hortofrutícolas.',
        '• Formación en diversas tecnologias web (Frontend y Backend)',
      ],
      technologies: [
        'HTML',
        'SASS',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Angular',
        'RxJs',
        'PrimeNG',
        'Java',
        'Spring',
        'SpringBoot',
        'Hibernate',
        'PostgreSQL',
      ],
    },
  ];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}
