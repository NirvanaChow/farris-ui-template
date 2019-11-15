import { TestBed, inject } from '@angular/core/testing';

import { ThemeHttpInterceptorService } from './theme-http-interceptor.service';

describe('ThemeHttpInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeHttpInterceptorService]
    });
  });

  it('should be created', inject([ThemeHttpInterceptorService], (service: ThemeHttpInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
