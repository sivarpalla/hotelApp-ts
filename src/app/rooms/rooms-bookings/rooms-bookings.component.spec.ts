import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsBookingsComponent } from './rooms-bookings.component';

describe('RoomsBookingsComponent', () => {
  let component: RoomsBookingsComponent;
  let fixture: ComponentFixture<RoomsBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsBookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomsBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
