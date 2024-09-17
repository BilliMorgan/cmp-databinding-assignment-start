import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers = [];

  onNumberAdded(numberData: { counter: number }) {
    this.numbers.push(numberData.counter);
  }
}
