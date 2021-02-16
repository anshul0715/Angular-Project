import { TestBed } from '@angular/core/testing';

import { GetCallService } from './get-call.service';

describe('GetCallService', () => {
  let service: GetCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
