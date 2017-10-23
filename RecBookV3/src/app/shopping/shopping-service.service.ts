import { Ingredients } from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";
//import { RecipeService } from "../recipe/recipe-service.service";

export class ShoppingService{

  // ingredientsSelected=new EventEmitter<Ingredients[]>();
  ingredientsSelected=new Subject<Ingredients[]>();
  
   private ingredients:Ingredients[]=[
        new Ingredients('Strawberry',5),
        new Ingredients('Apple',10)
      ];
 
  // constructor(private recipeservice:RecipeService){}   

   getIngredients(){
     return this.ingredients.slice()
     //return this.ingredients
}

addIngredients(item:Ingredients){

  this.ingredients.push(item);
  // this.ingredientsSelected.emit(this.ingredients.slice())
  this.ingredientsSelected.next(this.ingredients.slice())
  

}

showIng(ing:Ingredients[]){

  console.log(ing);
  this.ingredients.push(...ing);
  // this.ingredientsSelected.emit(this.ingredients);
  this.ingredientsSelected.next(this.ingredients);
}

}