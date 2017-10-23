import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropDownMenu } from './shared/dropdownmenu.directive';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipelistComponent } from './recipe/recipelist/recipelist.component';
import { RecipedetailsComponent } from './recipe/recipedetails/recipedetails.component';
import { RecipeitemComponent } from './recipe/recipelist/recipeitem/recipeitem.component';
import { ShoppingeditComponent } from './shopping/shoppingedit/shoppingedit.component';
import { HeaderComponent } from './header/header.component';
import { PracdirectiveDirective } from './pracdirective.directive';
import { UnlessDirective } from './unless.directive';
import { ShoppingService } from './shopping/shopping-service.service';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { Routing } from "./app-routing.module";

//import { RecipeService } from "./recipe/recipe-service.service";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    RecipeComponent,
    RecipelistComponent,
    RecipedetailsComponent,
    RecipeitemComponent,
    ShoppingeditComponent,
    HeaderComponent,
    PracdirectiveDirective,
    UnlessDirective,
    DropDownMenu,
    RecipeEditComponent,
  
  ],
  imports: [
    BrowserModule,
    Routing

  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
