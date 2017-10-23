import { Component, OnInit,OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from "./shopping-service.service";
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  //providers:[ShoppingService]
})
export class ShoppingComponent implements OnInit ,OnDestroy{

  ingredients:Ingredients[];
  subscription:Subscription;
  /*=[
    new Ingredients('Strawberry',5),
    new Ingredients('Apple',10)
  ];*/

  constructor(private shopping:ShoppingService) { }

  ngOnInit() {

    this.ingredients=this.shopping.getIngredients(); 
    this.subscription=this.shopping.ingredientsSelected.subscribe((i:Ingredients[]) =>{
    this.ingredients=i;
    /*console.log(i);
    console.log(this.ingredients)*/
    
  })
  
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  /*onAdded(item:Ingredients){
    this.ingredients.push(item);
    
  }*/

}
