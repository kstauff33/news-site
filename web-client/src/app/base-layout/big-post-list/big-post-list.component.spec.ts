import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigPostListComponent } from './big-post-list.component';

describe('BigPostListComponent', () => {
  let component: BigPostListComponent;
  let fixture: ComponentFixture<BigPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
