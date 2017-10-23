import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from'../recipe.model';
import { RecipeService} from '../recipe-service.service'
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css'],
  //providers:[RecipeService]
})
export class RecipedetailsComponent implements OnInit {

  //@Input() recipe:Recipe;
  recipe:Recipe;
  id:number

  constructor(private recipeServ:RecipeService,private route:ActivatedRoute,private router:Router) { }

  cart(){

    this.recipeServ.addtocart(this.recipe.ing);
  }

  /*toedit(){
    this.router.navigate(['/edit'],{relativeTo:this.route})
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
  }*/

  ngOnInit() {

    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.recipe=this.recipeServ.getdetails(this.id);
    })
  }

}
