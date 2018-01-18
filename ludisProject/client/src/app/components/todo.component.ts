import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'todos',
  templateUrl: './views/todos.component.html'
})

export class TodoComponent {
  constructor(private todoService: TodoService) {}
  todos = {};
  mesagge = {};

  loadTodos() {
    this.todoService.getTodos().subscribe(data => this.todos = data);
  }

  test() {
    this.todoService.test().subscribe(data => this.mesagge = data);
  }
}