import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .even {
      background: yellow;
    }

    .odd {
      background: orange;
    }
  `]
})
export class ServerComponent implements OnInit {
  btnClicked = false;
  number: number;
  numberState: string;
  numbersList = [];

  constructor() {  }

  ngOnInit() {
  }

  clickAction() {
    this.number = Math.floor(Math.random() * (10));
    this.numbersList.push(this.number);
    // this.numberState = this.number % 2 === 0 ? 'even' : 'odd';
    this.btnClicked = true;
  }

  getColor() {
    return this.numberState === 'even' ? 'blue' : 'green';
  }
}
