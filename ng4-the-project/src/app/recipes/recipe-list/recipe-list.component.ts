import { Component } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
      'https://www.add1tbsp.com/wp-content/' +
      'uploads/2021/06/20210402-MLMC-Split-Lobster-Herb-Butter1444-scaled-1366x2048.jpg'),
      new Recipe('A Test Recipe', 'This is simply a test', 
        'https://www.add1tbsp.com/wp-content/' +
        'uploads/2021/06/20210402-MLMC-Split-Lobster-Herb-Butter1444-scaled-1366x2048.jpg')
  ];

}
