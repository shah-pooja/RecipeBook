import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingComponent } from "./shopping/shopping.component";
import { RecipedetailsComponent } from "./recipe/recipedetails/recipedetails.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";

const approutes:Routes=[
    {path:'',component:RecipeComponent},
    {path:'recipe',component:RecipeComponent,children:[
        {path:'new',component:RecipeEditComponent},
        {path:':id',component:RecipedetailsComponent},
        {path:':id/edit',component:RecipeEditComponent}]},
    {path:'shopping',component:ShoppingComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(approutes)],
    exports:[RouterModule]
})
export class Routing{

} 