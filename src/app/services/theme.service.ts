import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from '../assets/themes/theme.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject: BehaviorSubject<string>;
  public theme$: Observable<string>;

  constructor() {
    // Setting default theme
    this.themeSubject = new BehaviorSubject<string>(Theme.LIGHT);
    this.theme$ = this.themeSubject.asObservable();
    console.log(this.getTheme());
  }

  public getTheme(): string {
    return this.themeSubject.getValue();
  }

  public setTheme(theme: string): void {
    this.themeSubject.next(theme);
  }

  public getTheme$(): Observable<string> {
    return this.theme$;
  }

}
