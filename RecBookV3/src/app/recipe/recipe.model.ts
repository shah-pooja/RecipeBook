import { Ingredients } from "../shared/ingredients.model";
export class Recipe{
    public name:String;
    public desc:String;
    public img:String;
    public ing:Ingredients[];

    constructor(name:string,desc:string,img:string,ing:Ingredients[]){

        this.name=name;
        this.desc=desc;
        this.img=img;
        this.ing=ing

    }
}