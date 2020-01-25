import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCreationDialogComponent } from './confirm-creation-dialog.component';

describe('ConfirmCreationDialogComponent', () => {
  let component: ConfirmCreationDialogComponent;
  let fixture: ComponentFixture<ConfirmCreationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCreationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
