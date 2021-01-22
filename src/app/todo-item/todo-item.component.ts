import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item!: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  removeItem() {
    console.log(this.item);
    const itemTitle = this.item.title && this.item.title.substring(0, 30);
    const deleteAction = confirm(`Proceed to delete todo? (${itemTitle}...)`);
    if (deleteAction) {
      this.remove.emit(this.item);
    }
  }
  completeItem() {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed },
    });
    // access checkbox and set the checked status as true
  }
}
