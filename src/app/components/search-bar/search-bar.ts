import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Input() search: string = "";
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();
  @Output('submit') searchButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  searchClick() {
    this.searchButtonClicked.emit();
  }

  updateSearch(value: string) {
    this.searchChange.emit(value);
  }
}
