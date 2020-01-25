import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionBottomsheetComponent } from './subscription-bottomsheet.component';

describe('SubscriptionBottomsheetComponent', () => {
  let component: SubscriptionBottomsheetComponent;
  let fixture: ComponentFixture<SubscriptionBottomsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionBottomsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
