import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDashboardTwoComponent } from './movie-dashboard-two.component';

describe('MovieDashboardTwoComponent', () => {
  let component: MovieDashboardTwoComponent;
  let fixture: ComponentFixture<MovieDashboardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDashboardTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDashboardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
