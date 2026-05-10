import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTwoComponent } from './mobile-two.component';

describe('MobileTwoComponent', () => {
  let component: MobileTwoComponent;
  let fixture: ComponentFixture<MobileTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
