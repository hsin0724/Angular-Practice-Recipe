import { EventEmitter } from "@angular/core";
import { Ingredient } from "../share/ingredient.model";
import { Subject } from 'rxjs';

export class ShoppinglistService{
  //EventEmitter > we have to inform our component that new data is available, push new information about changed ingredients from component A to B,.
  // ingredientsChanged = new EventEmitter<Ingredient[]>();

  //better pattern is to replace all our event emitters which we have with subjects.
  //使用Subject 來取代 EventEmitter , 使用Subject為比較好的方式
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients : Ingredient[] =[
    new Ingredient('tomoto', 10),
    new Ingredient('Shrimp', 5)
  ];

  // shoppingListCreated = new EventEmitter<Ingredient>();

  getIngredient(){
    return this.ingredients.slice();
  }

  //在食材清單頁面新增食材
  addIngredient(newIngredientData : Ingredient){
    this.ingredients.push(newIngredientData);

    //當ingredients 陣列add新ingredient時，要再output一次新的(copy的)陣列, EventEmitter 使用emit()來發送新訊息, Subject 使用next()來發送
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());

  }

  //新增食譜裡的食材到購物清單
  addIngredients(ingredients : Ingredient[]){
    //spread operator ...  > let arr = [1, 2, 3]; console.log(...arr); // 1 2 3
    this.ingredients.push(...ingredients);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());

  }

}
