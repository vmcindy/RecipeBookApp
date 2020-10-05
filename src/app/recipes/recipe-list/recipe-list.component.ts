import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Chicken Tikka Masala', 'A popular north Indian chicken dish.',
    'https://s3-media0.fl.yelpcdn.com/bphoto/NtaiOC1qC7WMuBhBnYhGkg/o.jpg'),
    new Recipe('Chicken Vindaloo', 'South Indian chicken curry with potatoes.',
    'https://s3-media0.fl.yelpcdn.com/bphoto/cApB3Pj8Xr4kSRaCjUCrEw/o.jpg'),
    new Recipe('Chole  Masala', 'Punjabi style chickpea dish.',
    'https://s3-media0.fl.yelpcdn.com/bphoto/Xzql6vakNrollYvxRnOgDQ/o.jpg'),
    new Recipe('Saag Paneer', 'Spinach and cottage cheese dish.',
    'https://s3-media0.fl.yelpcdn.com/bphoto/NtaiOC1qC7WMuBhBnYhGkg/o.jpg')
  ];

  constructor() {}
  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    console.log('this.recipeWasSelected', this.recipeWasSelected);
    this.recipeWasSelected.emit(recipe);
  }

}
