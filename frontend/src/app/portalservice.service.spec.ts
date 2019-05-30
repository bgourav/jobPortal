import { TestBed } from '@angular/core/testing';

import { PortalserviceService } from './portalservice.service';

describe('PortalserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortalserviceService = TestBed.get(PortalserviceService);
    expect(service).toBeTruthy();
  });
});
