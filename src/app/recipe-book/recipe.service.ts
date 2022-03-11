import { Subject } from 'rxjs';
import { ShoppinglistService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../share/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {
  //使用Subject 來取代 EventEmitter , 使用Subject為比較好的方式
  // recipeSelected = new EventEmitter<Recipe>();
  // recipeSelected = new Subject<Recipe>();

  private recipes : Recipe[] = [

    new Recipe(
      'Sushi Rolls',
      'This is a Sushi Rolls recipe.',
      'https://images.japancentre.com/recipes/pics/18/main/makisushi.jpg?1557308201',
      [
        new Ingredient('sushi rice', 1),
        new Ingredient('nori seaweed', 1),
        new Ingredient('salmon', 2),
        new Ingredient('cucumbe', 2)
      ]),

    new Recipe(
      'Ramen',
      'This is a Ramen recipe.',
      'https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg',
      [
        new Ingredient('ramen noodles', 1),
        new Ingredient('scallion', 2),
        new Ingredient('egg', 1),
        new Ingredient('meat', 2)
      ])
  ];

  constructor(private shoppingList : ShoppinglistService){}

  getRecipes(){
    // 使用slice()可以回傳一組copy的新陣列
    return this.recipes.slice();
  }

  AddIngredientsToShoppingList(ingredients : Ingredient[]){
    this.shoppingList.addIngredients(ingredients);
  }

  getRecipeID(index : number){
    return this.recipes[index];
  }



}
