import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,
})
export class EducationComponent {
  education = [
    {
      title: 'Grado en Ingeniería Informática',
      date: '2016 - 2021 | Universidad de Huelva',
      description: 'T.F.G.: Arquitectura de Computador basada en Acumulador',
    },
    {
      title: 'Bachillerato Bilingüe, Ciencias y Tecnologías',
      date: '2014 - 2016 | I.E.S. Catedrático Pulido Rubio',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Illum eius blanditiis dolorum reprehenderit asperiores 
                    pariatur, non libero aspernatur omnis. Dolores quod cum 
                    delectus eligendi qui nobis commodi nesciunt voluptas sit.`,
    },
  ];
}
