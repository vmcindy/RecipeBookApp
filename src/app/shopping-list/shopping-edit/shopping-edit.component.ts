import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput', {static:false}) amountInputEl: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() { }

  onAddIngredient(nameInput: HTMLInputElement) {
    const ingName = nameInput.value;
    const ingAmout = this.amountInputEl.nativeElement.value;

    const newIngredient = new Ingredient(ingName, ingAmout);

    this.slService.addIngredient(newIngredient);
  }

}
