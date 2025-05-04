import { Component } from '@angular/core';
import { fadeInLeft } from 'src/app/assets/animations/animations';
import { ScrollSpyDirective } from 'src/app/core/directives/ScrollSpy.directive';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
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
        '• Diseño y desarrollo de nueva versión del Sistema de Información de la Red de Carreteras de Andalucía (CONSICA).',
        '• Coordinación de tareas y liderazgo técnico en el equipo de FrontEnd',
        '• Definición de la arquitectura del sistema y toma de decisiones',
        '• Diseño y prototipado de la interfaz de usuario',
        '• Implemetación de componentes, pantallas y nuevas funcionalidades',
        '• Despliegue e integración de servicios y APIs',
      ],
      technologies: [
        'HTML',
        'SCSS',
        'TypeScript',
        'Angular',
        'RxJs',
        'NgRx',
        'Git',
        'GitLab',
      ],
    },
    {
      title: 'Desarrollador Backend',
      company: 'TEMPE Inditex',
      period: '2024 - 2024',
      description: [
        '• Diseño y desarrollo de sistema para la gestión de referencias e inventario, dentro de una arquitectura de microservicios.',
        '• Análisis y definición de requisitos técnicos',
        '• Implementación de servicios RESTful y gestión de bases de datos.',
        '• Participación en la creación de documentación técnica y funcional.',
        '• Elaboración de pruebas unitarias e intgración',
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
        '• Desarrollo del Portal Web para el Datalake de IFAPA - Catálogo de Datos Científicos Abierto.',
        '• Participación en análisis funcional y técnico, implementación de interfaces, documentación y toma de decisiones de arquitectura FrontEnd.',
        '• Liderazgo técnico en FrontEnd, promoviendo buenas prácticas (Clean Code, SOLID) y calidad del código.',
        '• Rol ocasional de Scrum Master, facilitando reuniones ágiles (dailys, plannings, retrospectivas).',
        '• Docencia en módulo de desarrollo web (Angular y Spring) en el marco del plan INNOVA.',
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
        '• Participación en el desarrollo del Simulador de Ejecución Presupuestaria (SEPRE) para la Junta de Andalucía.',
        '• Desarrollo de funcionalidades completas en FrontEnd y Backend sobre arquitectura de microservicios.',
        '• Diseño de modelo de datos, lógica de negocio, endpoints REST y creación de componentes en Angular.',
        '• Extracción y tratamiento de grandes volúmenes de datos desde archivos estáticos.',
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
        '• Desarrollo de aplicación de control horario utilizando tecnologías .NET y base de datos SQL Server.',
        '• Participación en mantenimiento evolutivo y correctivo del sistema existente.',
      ],
      technologies: ['C#', '.NET Core', '.NET Framework', 'SQL', 'SQLServer'],
    },
    {
      title: 'Desarrollador Web Full-Stack',
      company: 'Chapham Software Studio',
      period: '2021 - 2021',
      description: [
        '• Desarrollo de aplicación web para la gestión de empresas hortofrutícolas.',
        '• Formación práctica en tecnologías web (Angular, Node.js, Spring, PostgreSQL).',
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
