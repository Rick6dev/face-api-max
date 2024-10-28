import { TestBed } from '@angular/core/testing';

import { FaceAPIService } from './face-api.service';

describe('FaceAPIService', () => {
  let service: FaceAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
