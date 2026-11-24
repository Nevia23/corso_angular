import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLight { 
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}
