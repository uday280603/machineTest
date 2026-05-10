import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDashboardTwoComponent } from './mobile-dashboard-two.component';

describe('MobileDashboardTwoComponent', () => {
  let component: MobileDashboardTwoComponent;
  let fixture: ComponentFixture<MobileDashboardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDashboardTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDashboardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
