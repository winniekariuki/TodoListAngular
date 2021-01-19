import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <input #inputElementRef
         class="todo-input"
         [placeholder]="placeholder"
         (enter)="submitValue($event)">

  <button  class="btn" (click)="changeTitle(inputElementRef.value)">
    Save
  </button>
  `,  
  styleUrls: ['./input-button-unit.component.scss']  
})    
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
  placeholder = 'Type Todo List';

  constructor() { }                     

  ngOnInit() {
  }

  @Output() submit: EventEmitter<string> = new EventEmitter();

  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }

  submitValue(newTitle: any) {
    this.submit.emit(newTitle);
  }
}