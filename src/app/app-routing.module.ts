//Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Component
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';


const appRoutes : Routes = [
  { path: '', redirectTo : '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipeBookComponent, children:[
    { path: '', component: RecipeStartComponent},
    // :id 跟 new 互換位置，因為router無法得知new是否為:id
    { path : 'new', component : RecipeEditComponent},
    { path: ':id', component: RecipeDetailComponent},
    { path : ':id/edit', component : RecipeEditComponent}
  ]},
  { path: 'shopping-list', component: ShoppingListComponent},

];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(appRoutes,{enableTracing: true})
  ],
  exports:[RouterModule]
  })

  export class AppRoutingModule {
  }
