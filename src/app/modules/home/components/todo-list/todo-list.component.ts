import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements DoCheck {
  public taskList: TaskList[] = JSON.parse(
    localStorage.getItem('list') || '[]'
  );

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public deleteItemTask(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTasks(): void {
    const confirm = window.confirm('Você realmente deseja apagar tudo?');

    if (confirm) this.taskList = [];
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task está vazia, deseja deletar?');

      if (confirm) this.deleteItemTask(index);
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );

      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
