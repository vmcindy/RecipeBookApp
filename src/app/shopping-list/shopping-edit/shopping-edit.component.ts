import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output  } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput', {static:false}) amountInputEl: ElementRef;

  @Output('itemAdded') ingredientAdded = new EventEmitter<Ingredient>();
  // @Output('itemAdded') ingredientAdded = new EventEmitter<{itemName: string, itemAmount: string }>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(nameInput: HTMLInputElement) {
    const ingName = nameInput.value;
    const ingAmout = this.amountInputEl.nativeElement.value;

    const newIngredient = new Ingredient(ingName, ingAmout);

    this.ingredientAdded.emit(newIngredient)

    // this.ingredientAdded.emit({
    //   itemName : nameInput.value,
    //   itemAmount : this.amountInput.nativeElement.value
    // });
  }

}
