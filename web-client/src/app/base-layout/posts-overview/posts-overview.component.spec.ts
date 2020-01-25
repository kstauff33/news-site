import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsOverviewComponent } from './main-content.component';

describe('MainContentComponent', () => {
  let component: PostsOverviewComponent;
  let fixture: ComponentFixture<PostsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
