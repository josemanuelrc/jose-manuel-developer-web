/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScrollSpyService } from './scrollSpy.service';

describe('Service: ScrollSpy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollSpyService]
    });
  });

  it('should ...', inject([ScrollSpyService], (service: ScrollSpyService) => {
    expect(service).toBeTruthy();
  }));
});
