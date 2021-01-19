import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import { throwError } from 'rxjs';

const todoListStorageKey = 'Todo_List';

const defaultTodoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable()
export class TodoListService {
  todoList: Array<TodoItem> ;
  

  constructor(private storageService: StorageService) {
    this.todoList = 
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
}

  addItem(item: TodoItem) {
    let errorMessage = '';
    if(item.title) {
      this.todoList.push(item);
      this.saveList();
    }else{
      errorMessage = `Todo item cannot be blank`;
      window.alert(errorMessage);
     
    }
    return throwError(errorMessage);
  
  }

  updateItem(item: TodoItem, changes: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
  getTodoList() {
    return this.todoList;
  }

}