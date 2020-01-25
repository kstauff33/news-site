import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrafListButtonComponent } from './draf-list-button.component';

describe('DrafListButtonComponent', () => {
  let component: DrafListButtonComponent;
  let fixture: ComponentFixture<DrafListButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrafListButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrafListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
