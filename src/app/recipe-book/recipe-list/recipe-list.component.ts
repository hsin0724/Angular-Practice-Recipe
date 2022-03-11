import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // 使用Recipe model類型，上方記得import {Recipe} 告訴TypeScript 資料從哪來
  recipes : Recipe[];

  constructor(private recipeService : RecipeService,
              private router : Router,
              private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  // recipeSelected(recipeItem : Recipe){
  //   this.recipeWasSelected.emit(recipeItem)
  // }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
