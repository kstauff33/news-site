import { TestBed } from '@angular/core/testing';

import { AdminPostNetworkService } from './admin-post-network.service';

describe('AdminPostNetworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminPostNetworkService = TestBed.get(AdminPostNetworkService);
    expect(service).toBeTruthy();
  });
});
