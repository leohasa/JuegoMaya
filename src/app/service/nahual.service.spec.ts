import { TestBed } from '@angular/core/testing';

import { NahualService } from './nahual.service';

describe('NahualService', () => {
  let service: NahualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NahualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
