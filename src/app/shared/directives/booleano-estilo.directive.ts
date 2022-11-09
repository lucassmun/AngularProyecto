import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBooleanoEstilo]'
})
export class BooleanoEstiloDirective {
  @Input('appBooleanoEstilo') inscripcionAbierta!: boolean;

  constructor( 
    private elemento: ElementRef,
    private renderer: Renderer2,
  ) {}

ngOnInit(): void{
  this.renderer.setStyle(this.elemento.nativeElement, 'padding', '5px 10px 5px 10px');
  this.renderer.setStyle(this.elemento.nativeElement, 'width', '80%');
  this.renderer.setStyle(this.elemento.nativeElement, 'border-radius', '30px');
  this.renderer.setStyle(this.elemento.nativeElement, 'color', 'white');
  this.renderer.setStyle(this.elemento.nativeElement, 'background-color', this.inscripcionAbierta ? '#4CAF50' : '#F44336');
}


}


