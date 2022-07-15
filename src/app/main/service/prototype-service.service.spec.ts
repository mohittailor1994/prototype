import { TestBed } from '@angular/core/testing';

import { PrototypeServiceService } from './prototype-service.service';

describe('PrototypeServiceService', () => {
  let service: PrototypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrototypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
