import { Component, OnInit } from '@angular/core';
import { Todo, TODOS } from '../../models/todo.model';

@Component({
  selector: 'app-toto-dashboard',
  templateUrl: './toto-dashboard.component.html',
  styleUrls: ['./toto-dashboard.component.scss']
})
export class TotoDashboardComponent implements OnInit {
  todos: Todo[] = [...TODOS];
  editIndex: number | null = null;

  constructor() { }

  ngOnInit(): void {}

  handleAddTodo(todo: Todo) {
    if (this.editIndex !== null) {
      this.todos[this.editIndex] = todo;
      this.editIndex = null;
    } else {
      this.todos = [todo, ...this.todos];
    }
  }

  handleEditTodo(index: number) {
    this.editIndex = index;
  }

  handleRemoveTodo(index: number) {
    this.todos.splice(index, 1);
    if (this.editIndex === index) this.editIndex = null;
  }

  handleToggleStatus(index: number) {
    this.todos[index].status = !this.todos[index].status;
  }

  handleCancelEdit() {
    this.editIndex = null;
  }
}
