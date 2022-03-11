import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id : number;
  editMode = false;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        //當params['id'] 不等於 null (代表id有值)時，表示目前是在edit模式而非建立新recipe，所以返回true
        this.editMode = params['id'] != null;
        console.log(this.editMode);
      }
    )
  }

}
