import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from'../recipe';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
})

export class RecipeDetailComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}

	@Input() selectedRecipe: Recipe;

}
