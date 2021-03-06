import { TestBed } from '@angular/core/testing';

import { NgGlassmorphismService } from './ng-glassmorphism.service';

describe('NgGlassmorphismService', () => {
  let service: NgGlassmorphismService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgGlassmorphismService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
