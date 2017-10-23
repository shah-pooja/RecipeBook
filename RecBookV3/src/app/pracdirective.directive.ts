import { Directive,ElementRef,OnInit,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appPracdirective]'
})
export class PracdirectiveDirective implements OnInit {

  constructor(private eleref:ElementRef,private render:Renderer2) { }

  ngOnInit(){

    //this.eleref.nativeElement.style.backgroundColor="blue";
   // this.render.setStyle(this.eleref.nativeElement,"background-color","green");

  }
  @HostListener('mouseenter') abc(eventData:Event){
    this.render.setStyle(this.eleref.nativeElement,"background-color","blue");
  } 

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.render.setStyle(this.eleref.nativeElement,"background-color","yellow");
  } 

}
