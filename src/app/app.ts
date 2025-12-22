import { Component } from '@angular/core';
import {PlayingCard} from './components/playing-card/playing-card';
import {Monster} from './models/monster.model';
import {SearchBar} from './components/search-bar/search-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [
    PlayingCard,
    SearchBar
  ],
  styleUrls: ['./app.css']
})
export class App {
  monster1: Monster;
  count: number = 0;
  search2: string = ""

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Pik';
    this.monster1.hp = 70;
    this.monster1.figureCaption = 'N°002 Monster';
  }

  increaseCount() {
    this.count += 1;
  }
}
