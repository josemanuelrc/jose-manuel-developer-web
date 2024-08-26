import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lang-selector',
    templateUrl: './lang-selector.component.html',
    styleUrls: ['./lang-selector.component.scss'],
    standalone: true,
})
export class LangSelectorComponent implements OnInit {
  /* Selected Language */
  lang: string;

  langMap: { [key: string]: string } = {
    es: 'Español',
    en: 'Inglés',
  };

  constructor() {
    this.lang = 'Español';
  }

  ngOnInit() {}

  setLang(lang: string) {
    this.lang = this.langMap[lang];
  }
}
