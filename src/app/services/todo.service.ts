import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: string='';
  todoList: string[] = ['Rene','Lataupe '];
 
  addTodo(){
    console.log('add todo')
    this.todo = ''
  }

 
  getData(){
    return this.todoList;
  }
}