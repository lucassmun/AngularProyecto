import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTituloCabecera]'
})
export class TituloCabeceraDirective {
  @Input('appTituloCabecera') h1!: string;


  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void{
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px');
    
  }

}
