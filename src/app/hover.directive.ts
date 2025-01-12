import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective implements OnInit {

  @Input() appHover: string = 'red';
  color: string = 'red';
  constructor(private el: ElementRef,
     @Inject(DOCUMENT) private document: Document,
      private renderer: Renderer2) {
    //console.log('ElementRef: ',this.el.nativeElement);
    
  }
  ngOnInit(): void {
    //console.log('ElementRef: ',this.el.nativeElement);
    //this.el.nativeElement.style.backgroundColor = this.appHover;
    //this.document.body.style.backgroundColor = 'green';
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', 'brown');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
   this.el.nativeElement.style.backgroundColor = 'orange';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
   this.el.nativeElement.style.backgroundColor = 'white';
  }

}
