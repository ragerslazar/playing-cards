import { Component, signal } from '@angular/core';
import {PlayingCard} from './components/playing-card/playing-card';
import {Monster} from './models/monster.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [
    PlayingCard
  ],
  styleUrls: ['./app.css']
})
export class App {
  monster1: Monster;

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Pik';
    this.monster1.hp = 70;
    this.monster1.figureCaption = 'N°002 Monster';
  }
}
