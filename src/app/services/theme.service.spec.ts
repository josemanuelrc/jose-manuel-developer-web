import { TestBed, inject } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('Service: Theme', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeService],
    });
  });

  it('should ...', inject([ThemeService], (service: ThemeService) => {
    expect(service).toBeTruthy();
  }));
});
