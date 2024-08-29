import { Component } from '@angular/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss'],
  standalone: true,
})
export class LangSelectorComponent {
  /* Selected Language */
  lang: string;

  langMap: Record<string, string> = {
    es: 'Español',
    en: 'Inglés',
  };

  constructor() {
    this.lang = 'Español';
  }

  setLang(lang: string) {
    this.lang = this.langMap[lang];
  }
}
