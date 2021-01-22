import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './services/todo-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonHarness} from '@angular/material/button/testing';
@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
