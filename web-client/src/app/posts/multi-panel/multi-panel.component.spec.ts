import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPanelComponent } from './multi-panel.component';

describe('MultiPanelComponent', () => {
  let component: MultiPanelComponent;
  let fixture: ComponentFixture<MultiPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
