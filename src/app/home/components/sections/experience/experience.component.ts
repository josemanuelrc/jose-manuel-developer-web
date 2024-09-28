import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Desarrollador Backend',
      company: 'TEMPE Inditex',
      period: '2024 - 2024',
      description: 'Diseño y Desarrollo de Portal Web para Datalake de IFAPA',
      technologies: [
        'Java',
        'Spring',
        'SpringBoot',
        'Hibernate',
        'MySQL',
        'Git',
        'GitHub',
      ],
    },
    {
      title: 'Desarrollador Web Full-Stack',
      company: 'SOLTEL Group',
      period: '2023 - 2024',
      description: 'Diseño y Desarrollo de Portal Web para Datalake de IFAPA',
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
        'Hibernate',
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
      description: 'Diseño y Desarrollo de Portal Web para Datalake de IFAPA',
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
        'Hibernate',
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
      description: 'Diseño y Desarrollo de Portal Web para Datalake de IFAPA',
      technologies: ['C#', '.NET Core', '.NET Framework', 'SQL', 'SQLServer'],
    },
    {
      title: 'Desarrollador Web Full-Stack',
      company: 'Chapham Software Studio',
      period: '2021 - 2021',
      description: 'Diseño y Desarrollo de Portal Web para Datalake de IFAPA',
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
  description: string;
  technologies?: string[];
}
