import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighligh]'
})
export class HighlighDirective {

  @Input() highlightColor!:string ;

  @HostListener('mouseenter') onMouseEnter(){
    this.highLight(this.highlightColor)
  }

  @HostListener('mousedown') onMouseclick(){
    this.highLight("white")
  }

  constructor(private el:ElementRef) { 
    console.log('el',el);
  }

  highLight(color:string){    
    this.el.nativeElement.style.backgroundColor = color;
  }

    
}
