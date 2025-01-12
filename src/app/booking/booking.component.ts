import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  bookingForm!: FormGroup;
   

  constructor(private configSevice:ConfigService,
    private fb: FormBuilder) {
    console.log("ConfigService constructor3");
  }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl(''),
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAddress: [''],
      guestCity: [''],
      guestState: [''],
      guestCountry: [''],
      guestZipCode: [''],
      guestCount: [''],
      guestList: []
    });

    this.bookingForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  bookRoom() {
    console.log(this.bookingForm.getRawValue());
  }
}
