import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  @Input() todo: Todo | null = null;
  @Input() isEdit: boolean = false;
  @Output() addTodo = new EventEmitter<Todo>();
  @Output() cancelEdit = new EventEmitter<void>();
  newItem: string = '';

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['todo'] && this.todo) {
      this.newItem = this.todo.item;
    } else if (!this.isEdit) {
      this.newItem = '';
    }
  }

  onAddTodo() {
    if (this.newItem.trim()) {
      this.addTodo.emit({ item: this.newItem, status: this.todo?.status ?? false });
      this.newItem = '';
    }
  }

  onCancelEdit() {
    this.cancelEdit.emit();
    this.newItem = '';
  }
}
