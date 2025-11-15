import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[] = [];
  @Output() editTodo = new EventEmitter<number>();
  @Output() removeTodo = new EventEmitter<number>();
  @Output() toggleStatus = new EventEmitter<number>();
  @Output() viewTodo = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  onEdit(index: number) {
    this.editTodo.emit(index);
  }

  onRemove(index: number) {
    if (confirm('Are you sure you want to remove this todo?')) {
      this.removeTodo.emit(index);
    }
  }

  onToggleStatus(index: number) {
    this.toggleStatus.emit(index);
  }

  onView(index: number) {
    this.viewTodo.emit(index);
  }
}
