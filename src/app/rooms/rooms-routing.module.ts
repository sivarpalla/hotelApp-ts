import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { roomGuard } from './guards/room.guard';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    canActivateChild: [roomGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
