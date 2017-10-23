import { EventEmitter,Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingService} from '../shopping/shopping-service.service'

@Injectable()
export class RecipeService{

    //itemSelected=new EventEmitter<Recipe>();

    recipes:Recipe[]=[
        new Recipe("this is test1",
        "test dish 1",
        "https://c.pxhere.com/photos/c1/96/sweet_struffoli_typical_sweet_dessert_food_recipe_kitchen_dish-754476.jpg!d",
         [new Ingredients("sprinkles",20),new Ingredients("bread",10)]),
        
         new Recipe("this is test2",
        "test dish 2",
        "https://c.pxhere.com/photos/c1/96/sweet_struffoli_typical_sweet_dessert_food_recipe_kitchen_dish-754476.jpg!d",
        [new Ingredients("french fries",20)]),
      ];

      constructor(private shopping:ShoppingService){console.log(this.shopping)}
      getrecipe()
      {
          return this.recipes.slice();
      }

      getdetails(id:number){

        return this.recipes[id];

      }

      addtocart(ingr:Ingredients[]){

        this.shopping.showIng(ingr)

      }
    
}