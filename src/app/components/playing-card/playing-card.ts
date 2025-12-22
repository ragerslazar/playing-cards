import {Component, input, Input, InputSignal} from '@angular/core';
import {Monster} from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css',
})
export class PlayingCard {
  monster: InputSignal<Monster> = input<Monster, Monster>(new Monster(), {
    alias: 'my-monster', // Donne un alias (comme pour les @Input)
    transform: (value: Monster) => { // Modifie une valeur avant l'affichage (comme pour les @Input), s'applique uniquement sur la valeur passé a l'input dans le html et non a la valeur par défaut (ici new Monster)
      value.hp = value.hp / 2;
      return value;
    }
  });
}
