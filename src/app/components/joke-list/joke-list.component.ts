import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke/joke';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke('this x', 'xx'),
      new Joke('this y', 'yy'),
      new Joke('this z', 'zz'),      
    ]
  }

  ngOnInit() {}

  addJoke(joke) {
    this.jokes.unshift(joke)
  }

}
