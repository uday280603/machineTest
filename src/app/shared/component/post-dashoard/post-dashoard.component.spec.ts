import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDashoardComponent } from './post-dashoard.component';

describe('PostDashoardComponent', () => {
  let component: PostDashoardComponent;
  let fixture: ComponentFixture<PostDashoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDashoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDashoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
