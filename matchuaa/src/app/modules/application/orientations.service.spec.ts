import { TestBed } from '@angular/core/testing';

import { OrientationsService } from './orientations.service';

describe('OrientationsService', () => {
  let service: OrientationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrientationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
