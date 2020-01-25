import { TestBed } from '@angular/core/testing';

import { PostNetworkService } from './post-network.service';

describe('PostNetworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostNetworkService = TestBed.get(PostNetworkService);
    expect(service).toBeTruthy();
  });
});
