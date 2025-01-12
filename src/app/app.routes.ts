import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContainerComponent } from './container/container.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingsComponent } from './rooms/rooms-bookings/rooms-bookings.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: RoomsAddComponent},
  { path: 'employee', component: EmployeeComponent, canActivate: [loginGuard] },
  { path: 'container', component: ContainerComponent },
  { path: 'rooms/:id', component: RoomsBookingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'booking', loadComponent: () => import('./booking/booking.component').then(m => m.BookingComponent) }, // lazy loading
  //{ path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) }, // lazy loading
  { path: 'search', loadComponent: () => import('./search/search.component').then(m => m.SearchComponent) }, // lazy loading
  { path: '**', component: NotfoundComponent },

];
