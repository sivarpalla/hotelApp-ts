import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule,
      RouterOutlet,
      RouterModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent {

  @Input() rooms: RoomList[] | null= [];
  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges:', changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
    console.log("On Destroy");
  }
}
