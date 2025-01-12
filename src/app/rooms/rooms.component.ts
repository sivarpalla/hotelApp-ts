import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';
import { catchError, map, Observable, Subject, Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
//import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  providers: [RoomsService]   //creating a prototype object of RoomsService. If we don't do this, then we will get singletojn object of RoomsService
})
export class RoomsComponent {

  hideRooms = true;
  title = 'xxx';
  roomList: RoomList[]=[];
toggleRooms() {
  this.hideRooms = !this.hideRooms;
  this.title = 'yyyy'
}

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;

   rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.next('user4');
    observer.complete();

  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildren!: QueryList<HeaderComponent>;

  selectedRoom!: RoomList;

  subscription!: Subscription;

  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();
  rooms$ = this.roomService.getRooms$.pipe(
    catchError(err => {
      console.log(err);
      this.error$.next(err.message);
      return [];
    })
  );

  roomsCount$ = this.roomService.getRooms$.pipe(
    map((rooms) => rooms.length)
    //tap(totalRooms => console.log('Rooms count', totalRooms))
  );

   ngOnInit(): void {
    console.log("header title"+this.headerComponent);
    this.stream.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
      complete: () => console.log('complete')
    });
    this.stream.subscribe(data => console.log(data));
    //this.headerComponent.title = 'Header Rooms List';
    //this.roomList = this.roomService.getRooms();

  //  this.subscription = this.roomService.getRooms$.subscribe(rooms => {
  //     console.log(rooms); // Handle the rooms data
  //     this.roomList = rooms;
  //   });
    this.roomService.getPhotos().subscribe(event => {
      //console.log(photos); // Handle the photos data
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request sent');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header received');
          break;
        case HttpEventType.DownloadProgress:
          console.log('Download progress:', event.loaded / event.total!);
          break;
        case HttpEventType.Response:
          console.log('Response received:', event.body);
          break;
      }
    });
   // console.log("this.roomService.getRooms():"+this.roomService.getRooms());
  }

  ngAfterViewInit(): void {
    console.log("header title2:"+this.headerComponent);
    this.headerComponent.title = 'Header Rooms List';
    console.log("header title3:"+this.headerChildren);
    this.headerChildren.last.title = 'Last title';
  }
  //roomService = new RoomsService(); //without dependency injection

  constructor(private roomService: RoomsService, private configSevice:ConfigService) {  //with dependency injection
    //this.roomService = new RoomsService();
  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBwYXJ0bmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.57
    };
    //this.roomList.push(room);
    this.roomService.addRoom(room).subscribe(data => {
      this.roomList = data;
      console.log(data);
    });
    }

    editRoom() {
      const room: RoomList = {
        roomNumber: '3',
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBwYXJ0bmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.57
      };
      this.roomService.editRoom(room).subscribe(data => {
        this.roomList = data;
        console.log(data);
      });
    }

    deleteRoom() {
      this.roomService.deleteRoom('3').subscribe(data => {
        this.roomList = data;
        console.log(data);
      });
    }

    ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }


}
