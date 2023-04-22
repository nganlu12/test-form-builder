import { TestBed } from '@angular/core/testing';

import { ContextServiceService } from './context-service.service';

describe('ContextServiceService', () => {
  let service: ContextServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
