import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent {
  @Output() public emitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string) {
    this.emitSearch.emit(value);
  }
}
