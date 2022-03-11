import { ShoppinglistService } from './../shopping-list.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../share/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() shoppingListCreated = new EventEmitter<Ingredient>();
  @ViewChild('inputName',{static : true}) nameInput : ElementRef;
  @ViewChild('inputAmount',{static : true}) amountInput : ElementRef;

  constructor(private shoppinglistService : ShoppinglistService) { }

  ngOnInit(): void {
  }

  //使用Local References 失敗
  // onAddShoppingList(nameInput : HTMLInputElement, inputAmount : HTMLInputElement){
  //   console.log(nameInput,inputAmount);
  //   const ingName = nameInput.value;
  //   const ingAmount = Number(inputAmount);
  //   const newIngredient = new Ingredient(ingName, ingAmount);
  //   this.shoppingListCreated.emit(newIngredient);
  // }

  onAddShoppingList(){
    //先用一個常數存值，這樣new Ingredient的()裡就不用寫太長
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppinglistService.addIngredient(newIngredient);
  }

}


