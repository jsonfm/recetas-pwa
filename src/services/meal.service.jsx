export class RecipesService {
    constructor(api){
        this.api = api;
    }
}

export const recipesService = new RecipesService();