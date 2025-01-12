import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private configSevice:ConfigService) {
    console.log("ConfigService constructor 2");
  }
  //title = 'hotel-inventory-app';
  title: string = '';
}
