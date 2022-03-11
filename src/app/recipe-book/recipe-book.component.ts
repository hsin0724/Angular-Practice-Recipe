import { Component, OnInit } from '@angular/core';
// import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  // selectedRecipe : Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit(){
    // subscribe() can get informed about any changes
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe : Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );
  }

  // recipeWasSelected(recipeItem : Recipe){
  //   this.selectedRecipe = recipeItem;
  // }

}
