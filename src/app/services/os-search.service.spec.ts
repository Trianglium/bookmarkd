import { TestBed } from '@angular/core/testing';

import { OsSearchService } from './os-search.service';

describe('OsSearchService', () => {
  let service: OsSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
