import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedlineComponent } from './redline.component';

describe('RedlineComponent', () => {
  let component: RedlineComponent;
  let fixture: ComponentFixture<RedlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
