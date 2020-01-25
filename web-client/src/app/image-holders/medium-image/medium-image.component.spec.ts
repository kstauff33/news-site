import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumImageComponent } from './medium-image.component';

describe('MediumImageComponent', () => {
  let component: MediumImageComponent;
  let fixture: ComponentFixture<MediumImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
