import { Ingredient } from './../share/ingredient.model';

export class Recipe {
  // 使用public 才可以從外部取用
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients : Ingredient[];

  // constrctor()裡面為結構參數名而非變數，parameter為參數
  constructor(name: string, desc: string, imagePath: string, ingredients : Ingredient[]){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
