import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Test','Testing','https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Foods.jpg/513px-Foods.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
