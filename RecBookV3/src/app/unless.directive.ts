import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition:boolean){

    if(!condition)
    {
      this.viewref.createEmbeddedView(this.tempref)
    }
    else
    {
      this.viewref.clear()
    }

  }

  constructor(private tempref:TemplateRef<any>,private viewref:ViewContainerRef) { }

}
