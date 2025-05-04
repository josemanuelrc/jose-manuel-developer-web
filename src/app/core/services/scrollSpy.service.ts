import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollSpyService {
  private sectionInView$ = new BehaviorSubject<string>('');

  setActiveSection(id: string) {
    this.sectionInView$.next(id);
  }

  get activeSection$(): Observable<string> {
    return this.sectionInView$.asObservable();
  }
}
