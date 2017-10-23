import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from "../recipe-service.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  //@Output() itemdetails=new EventEmitter<Recipe>();
   recipes:Recipe[];
  //=[
  //   new Recipe("this is test1","test dish 1","https://c.pxhere.com/photos/c1/96/sweet_struffoli_typical_sweet_dessert_food_recipe_kitchen_dish-754476.jpg!d"),
  //   new Recipe("this is test2","test dish 2","https://c.pxhere.com/photos/c1/96/sweet_struffoli_typical_sweet_dessert_food_recipe_kitchen_dish-754476.jpg!d"),
  //   new Recipe("this is test3","test dish 3","https://c.pxhere.com/photos/c1/96/sweet_struffoli_typical_sweet_dessert_food_recipe_kitchen_dish-754476.jpg!d")
  // ];

  constructor(private rec_array:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.recipes=this.rec_array.getrecipe();
  }

  tonew(){
 this.router.navigate(['new'],{relativeTo:this.route});
  }

  // onShowDetails(item:Recipe){

  //   this.itemdetails.emit(item);


  // }
}
