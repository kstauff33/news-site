import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsOverviewComponent } from './authors-overview.component';

describe('AuthorsOverviewComponent', () => {
  let component: AuthorsOverviewComponent;
  let fixture: ComponentFixture<AuthorsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
