import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-bookings.component.html',
  styleUrl: './rooms-bookings.component.css'
})
export class RoomsBookingsComponent {

  id: number = 0;
  id$ = this.router.params.pipe(
    map(params => params['id'])
  );
  paramId: string | null = '';

  constructor(private router: ActivatedRoute) {
    console.log("RoomsBookingsComponent Constructor");
  }
  ngOnInit(): void {
    console.log("RoomsBookingsComponent ngOnInit");
    this.router.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
    })
    //this.id = this.router.snapshot.params['id'];
    this.router.paramMap.subscribe((param) => { this.paramId = param.get('id') });
  }
}
