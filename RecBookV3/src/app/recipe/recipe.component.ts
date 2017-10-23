import { Component, OnInit } from '@angular/core';
import { RecipeService } from "./recipe-service.service";
import {Recipe} from './recipe.model'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeService]
})
export class RecipeComponent implements OnInit {
  itemshow:Recipe
  //selectedRecipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {

    /*this.recipeService.itemSelected.subscribe(
      (recipe:Recipe) =>
      {console.log(recipe);this.itemshow=recipe}

    );

    this.recipeService.itemSelected.subscribe(
      (recipe:Recipe) =>
      {console.log(recipe)}

    );*/
  }

}
