import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorHighlightComponent } from './author-highlight.component';

describe('AuthorHighlightComponent', () => {
  let component: AuthorHighlightComponent;
  let fixture: ComponentFixture<AuthorHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
