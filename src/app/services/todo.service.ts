import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: string='';
  todoList: string[] = [];
 
  addTodo(){
    this.todo = ''
  }
  getData(){
    return this.todoList;
  }
}