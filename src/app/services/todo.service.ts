import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Todo[] = [
    new Todo({ taskName:'Rene', taskStatus:true, id: 1 }),
    new Todo({ taskName:'Bernard', taskStatus:true, id: 2 }),
  ];
 
  constructor(){}

  getNewTodo():Todo{
    return new Todo();
  }

  addTask(data:Todo):void{

     this.todoList.push(data);
  }

  deleteTask(id:number|undefined):void{ 
    const index = this.todoList.findIndex(item=> item.id=id)
    this.todoList.splice(index,1)
  }
}