import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingsComponent } from './rooms-bookings/rooms-bookings.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    RoomsComponent,
    RoomsAddComponent,
    RoomsBookingsComponent,
    RoomsListComponent,
    FormsModule,
    
  ]
})
export class RoomsModule { }
