import { TestBed } from '@angular/core/testing';

import { FrndService } from './frnd.service';

describe('FrndService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrndService = TestBed.get(FrndService);
    expect(service).toBeTruthy();
  });
});
