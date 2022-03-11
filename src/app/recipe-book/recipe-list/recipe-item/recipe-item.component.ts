import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from './../../recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() itemElement : Recipe;
  @Input() index : number;

  constructor() { }

  ngOnInit(){
  }

}


 /*
 使用@Input()、@Output方法

  export class RecipeItemComponent implements OnInit {
    @Input() itemElement : Recipe;
    // @Output() recipeSelected = new EventEmitter<void>();


    constructor(private recipeService : RecipeService) { }

    ngOnInit(){
    }

    clickList(){
      //註解掉@Output的使用方法，改使用RecipeService注入需要的東西，減少組件之間的溝通，降低關聯性
      this.recipeService.recipeSelected.emit(this.itemElement);
      // this.recipeSelected.emit();
    }
  }



  */

