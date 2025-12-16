import {Component, Input} from '@angular/core';
import {Monster} from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css',
})
export class PlayingCard {
  @Input({
    // required: true,  Forcer l'ajout de l'attribut dans le html,
    // alias: 'my-monster',  Force a donner un autre nom a l'attribut donc my-monster au lieu de monster
    // transform: (value: Monster) => {  Modifie une donnée avant l'affichage
    //   value.hp = value.hp / 2;
    //   return value;
    // }
  }) monster: Monster = new Monster();
  // @Input() monster: Monster = new Monster();
}
