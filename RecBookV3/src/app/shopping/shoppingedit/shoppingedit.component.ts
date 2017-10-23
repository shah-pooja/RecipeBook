import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';
import { ShoppingService } from "../shopping-service.service";
@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {

  @ViewChild('shoppingamount') shoppingamount:ElementRef
  @ViewChild('shoppingname') shoppingname:ElementRef
  //@Output() shopping=new EventEmitter<Ingredients>();
  constructor(private shopping:ShoppingService) { }

  onAdd(){

    const shoppingele=new Ingredients(this.shoppingname.nativeElement.value,this.shoppingamount.nativeElement.value);
    //this.shopping.emit(shoppingele);
    this.shopping.addIngredients(shoppingele);
  }



  ngOnInit() {}

    

}
