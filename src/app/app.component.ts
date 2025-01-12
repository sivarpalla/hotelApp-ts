import { Component, ElementRef, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LOCALSTORAGE_TOKEN } from './localstorage.token';
import { InitService } from './init.service';
import { AppNavComponent } from "./app-nav/app-nav.component";
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
//import { RoomsService } from './rooms/services/rooms.service';
//import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, CommonModule, ContainerComponent, EmployeeComponent, AppNavComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotelApp';
  role= 'Admin';

  //@ViewChild('loading', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentref = this.vcr.createComponent(RoomsComponent);
  //   componentref.instance.hotelName = 'Seven seasons Hotel';
  // }

  @ViewChild('name', {static:true}) name!: ElementRef;

  ngOnInit() {
    //this.name.nativeElement.innerText = 'Raj';
    // this.router.events.subscribe(event => {
    //   console.log('event:',event);
    // });
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(event => {
      console.log('NavigationStart:',event);
    });
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      console.log('NavigationEnd:',event);
    });
    this.localStorage.setItem('name', 'Four Seasons Hotel from Local');
  }
  constructor(@Inject(LOCALSTORAGE_TOKEN) private localStorage: Storage,
                 private initService: InitService,
                 private router: Router) {
    console.log("config info: "+initService.config.apiVersion);
  }

}
