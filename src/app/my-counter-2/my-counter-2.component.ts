import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-my-counter-2',
  templateUrl: 'my-counter-2.component.html',
  styles: [],
  // providers option is for creating a separate instance of the service in each component
  // providers: [CounterService]
})

export class MyCounter2Component implements OnInit {
  constructor(private theCounter: CounterService) {}

  ngOnInit() {}

  incrementCounter() {
    this.theCounter.increment();
  }
}
