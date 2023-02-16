import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.sass'],
})
export class TodoInputAddItemsComponent implements OnInit {
  @Output() public emitItemTask = new EventEmitter();

  public addItemTask: string = '';

  constructor() {}

  ngOnInit(): void {}

  public submitItemTask() {
    this.addItemTask = this.addItemTask.trim();

    if (this.addItemTask) {
      this.emitItemTask.emit(this.addItemTask);
      this.addItemTask = '';
    }
  }
}
