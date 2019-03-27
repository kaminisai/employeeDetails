import { Directive,ElementRef, HostListener } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(el:ElementRef) {
        el.nativeElement.style.backgroundColor="pink";
        el.nativeElement.style.textColor="black";
     
  }  
        @HostListener('click') Message(){
          alert('Its working')
        }

        @HostListener('mouseenter') Message1(){
          alert('mouse entered')
   
   }
   @HostListener('mouseleave') Message2(){
    alert('mouse left')

}
@HostListener('mousemove') Message3(){
  alert('mouse moving')

}


  }
