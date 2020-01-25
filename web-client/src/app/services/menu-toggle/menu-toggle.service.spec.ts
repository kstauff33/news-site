import { TestBed } from '@angular/core/testing';

import { MenuToggleService } from './menu-toggle.service';

describe('MenuToggleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuToggleService = TestBed.get(MenuToggleService);
    expect(service).toBeTruthy();
  });
});
