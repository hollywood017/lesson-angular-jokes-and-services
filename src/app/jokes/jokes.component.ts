import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'jokes',
  templateUrl: 'jokes.component.html',
  providers: [JokesService]
})
export class JokesComponent implements OnInit {

  joke: any;
  constructor(private myJokesService: JokesService) { }

  ngOnInit() {}

  getRandomJoke() {
    this.myJokesService.getRandom()
      .subscribe((joke) => this.joke = joke);
  }
}
