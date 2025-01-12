import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, shareReplay, Subject } from 'rxjs';
//import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

 roomList: RoomList[] = [];
 error$ !: Subject<string>;
 //header = new HttpHeaders({ 'token': '12345' });
 //getRooms$ = this.http.get<RoomList[]>('/api/rooms', {headers: this.header}).pipe(
  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
 );

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig, private http: HttpClient) { 

   // console.log('Rooms Service Initialized...', environment.apiEndpoint);
   console.log('Rooms Service Initialized...:', this.config.apiEndpoint);
   console.log('Rooms Service Initialized...:', this.http);
  }

  getRooms(): Observable<RoomList[]> {
   // return this.roomList;
    const header = new HttpHeaders({ 'token': '12345' });
 return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const req = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

 /* roomList: RoomList[] = [
    {
      roomNumber: '1',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBwYXJ0bmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
    },
    {
      roomNumber: '2',
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBwYXJ0bmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.45654
    },
    {
      roomNumber: '3',
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBwYXJ0bmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 2.6
    }
  ]
*/

}
