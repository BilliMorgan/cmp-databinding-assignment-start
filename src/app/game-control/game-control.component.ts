import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent implements OnInit {
  @Output() counterEmitted = new EventEmitter<{
    counter: number;
  }>();

  counter = 0;
  intervalId: any;

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.intervalId = setInterval(() => {
      this.counterEmitted.emit({
        counter: this.counter++,
      });
    }, 1000);
  }
  onStop() {
    clearInterval(this.intervalId);
  }
}
