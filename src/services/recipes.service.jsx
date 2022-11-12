import { ingredients } from "./ingredients";
import { recipes } from "./recipes";
import { tags } from "./tags";


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
}

export const recipesService = new RecipesService();