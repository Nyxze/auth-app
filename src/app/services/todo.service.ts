import { Injectable } from '@angular/core';
import { Todo, TodoInterface } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: TodoInterface;
  todoList: TodoInterface[] = [
    { todoName: 'Manger', todoState: true },
    { todoName: 'Boir', todoState: true },
    { todoName: 'Dormir', todoState: true },
    
  ];
  constructor() { 
    this.todo = new Todo()
  }

  addTodo(){

    this.todoList.push()
    this.todo.todoState = true;
    this.todo.todoName = ''
  }
  getData(){
    return this.todoList;
  }
}