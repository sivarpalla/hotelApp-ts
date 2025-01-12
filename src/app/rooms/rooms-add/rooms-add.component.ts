import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.css'
})
export class RoomsAddComponent {

  room: RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,

  }
  successMessage: string = '';
  constructor(private roomService: RoomsService) {
    console.log(this.room);
  }

  addRoom(roomForm: NgForm){
    this.roomService.addRoom(this.room).subscribe((data) => {
      console.log(data);
      this.successMessage = 'Room added successfully';
      roomForm.reset();
    });
  }
}
