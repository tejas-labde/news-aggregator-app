import { TestBed } from '@angular/core/testing';

import { SourceOneService } from './source-one.service';

describe('SourceOneService', () => {
  let service: SourceOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourceOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
