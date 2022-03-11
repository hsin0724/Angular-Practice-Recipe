import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../share/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // 指定型別的時候要使用 " : "
  // ingredients : Ingredient[] =[
  //   new Ingredient('tomoto', 10),
  //   new Ingredient('Shrimp', 5)
  // ];

  private igChangeSub : Subscription;

  ingredients : Ingredient[];

  constructor(private shoppinglistService : ShoppinglistService) { }

  ngOnInit(){
    this.ingredients = this.shoppinglistService.getIngredient();

    //subscribe訂閱ingredients陣列，當陣列有變更時則通知shoppinglist.component並更新陣列
    this.igChangeSub = this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredient : Ingredient[]) => {
        this.ingredients = ingredient;
      }
    )
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }

  // addShoppingList(newIngredientData : Ingredient){
  //   this.shoppinglistService.getShoppingList;
  // }

}
