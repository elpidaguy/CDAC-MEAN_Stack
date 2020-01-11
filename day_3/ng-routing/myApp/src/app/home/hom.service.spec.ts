import { TestBed } from '@angular/core/testing';

import { HomService } from './hom.service';

describe('HomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomService = TestBed.get(HomService);
    expect(service).toBeTruthy();
  });
});
