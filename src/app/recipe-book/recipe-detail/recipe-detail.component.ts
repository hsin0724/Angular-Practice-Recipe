import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;
  id : number;

  constructor(private recipeService : RecipeService,
              private route : ActivatedRoute,
              private router : Router,) { }

  ngOnInit(){

    // 點擊recipe list之後要獲取detail的id，路由才能顯示recipes/id
    this.route.params.subscribe(
      (params : Params) => {
        //因為id是number，但params['id']是string，所以要在前面使用+號把string轉換成number
        // params['id']的id指的是app-routing.ts裡的{ path: ':id', component: RecipeDetailComponent}
        this.id = +params['id'];

        //可以使用id來辨別我們點擊哪個食譜
        // 假設目前id=1，呼叫getRecipeID(1)，方法 return this.recipes[1]，因此會回傳食譜index1的資訊;
        this.recipe = this.recipeService.getRecipeID(this.id);
      }
    );

  }

  onAddToShoppingList(){
    this.recipeService.AddIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(["edit"], {relativeTo : this.route});
    
    //另一種寫法,回到上一層/recipes後再導向 :id/edit
    // this.router.navigate(["../", this.id, "edit"], {relativeTo : this.route});
  }

}


/*
使用@Input()
export class RecipeDetailComponent implements OnInit {
  @Input() recipe : Recipe;

  constructor(private recipeservice : RecipeService) { }

  ngOnInit(){
  }

  onAddToShoppingList(){
    this.recipeservice.AddIngredientsToShoppingList(this.recipe.ingredients);
  }

}
*/
