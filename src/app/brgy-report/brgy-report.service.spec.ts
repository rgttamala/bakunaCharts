import { TestBed } from '@angular/core/testing';

import { AppOutputGraphService } from './app-output-graph.service';

describe('AppOutputGraphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppOutputGraphService = TestBed.get(AppOutputGraphService);
    expect(service).toBeTruthy();
  });
});
