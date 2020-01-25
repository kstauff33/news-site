import { TestBed } from '@angular/core/testing';

import { TagNetworkServiceService } from './tag-network-service.service';

describe('TagNetworkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagNetworkServiceService = TestBed.get(TagNetworkServiceService);
    expect(service).toBeTruthy();
  });
});
