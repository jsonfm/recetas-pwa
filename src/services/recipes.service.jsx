import { ingredients } from "./ingredients";
import { recipes } from "./recipes";
import { tags } from "./tags";
import { groceries } from "./groceries";


export class RecipesService {
    constructor(api){
        this.api = api;
    }

    getRecipes(){
        return recipes;
    }

    getIngredients(){
        return ingredients;
    }

    getTags(){
        return tags;
    }

    getGroceries(){ 
        return groceries;
    }
}

export const recipesService = new RecipesService();