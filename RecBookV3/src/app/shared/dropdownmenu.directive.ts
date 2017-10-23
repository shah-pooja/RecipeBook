import {Directive,HostListener,OnInit,HostBinding} from '@angular/core';

@Directive({
    selector:'[appdropdown]'
})
export class DropDownMenu {

    //private open=false;

    @HostBinding('class.open') open=false;

    @HostListener('click') show()
    {
        this.open=!this.open
    }
/*@HostBinding('class.open')  get drop(){

    return this.open;
}

@HostListener('mouseover') down()
{
     this.open=true;
}

@HostListener('click') up()
{
    this.open=false;
}*/



}