import { Component, OnInit,Input} from '@angular/core';
import { Recipe } from "../../recipe.model";
import { RecipeService} from "../../recipe-service.service";

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {

@Input() element:Recipe;
@Input() index:number;

//@Output()show =new EventEmitter<void>();

  constructor(private item:RecipeService) { }

  onshow(){
    //this.show.emit();
    this.item.itemSelected.emit(this.element)
  }

  ngOnInit() {
  }

}
