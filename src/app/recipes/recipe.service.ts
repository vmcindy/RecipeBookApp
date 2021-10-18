import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Chicken Tikka Masala',
            'A popular north Indian chicken dish.',
            'https://s3-media0.fl.yelpcdn.com/bphoto/NtaiOC1qC7WMuBhBnYhGkg/o.jpg',
            [
                new Ingredient('Chicken','1lb'),
                new Ingredient('Onions','1lb'),
                new Ingredient('Tomatoes','1lb')
            ]),
        new Recipe(
            'Chicken Vindaloo',
            'South Indian chicken curry with potatoes.',
            'https://s3-media0.fl.yelpcdn.com/bphoto/cApB3Pj8Xr4kSRaCjUCrEw/o.jpg',
            [
                new Ingredient('Chicken','1lb'),
                new Ingredient('Onions','1lb'),
                new Ingredient('Potatoes','1lb')
            ]),
        new Recipe(
            'Chole Masala',
            'Punjabi style chickpea dish.',
            'https://s3-media0.fl.yelpcdn.com/bphoto/Xzql6vakNrollYvxRnOgDQ/o.jpg',
            [
                new Ingredient('Chick Peas','1lb'),
                new Ingredient('Onions','1lb'),
                new Ingredient('Tomatoes','1lb')
            ]),
        new Recipe(
            'Saag Paneer', 
            'Spinach and cottage cheese dish.',
            'https://s3-media0.fl.yelpcdn.com/bphoto/NtaiOC1qC7WMuBhBnYhGkg/o.jpg',
            [
                new Ingredient('Paneer','1lb'),
                new Ingredient('Spinach','2lb'),
                new Ingredient('Onions','1lb')
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}