import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Todo[] = [
    new Todo({ taskName:'Traire les vaches', taskStatus:true, id: 1, user:'Rene'}),
    new Todo({ taskName:'Conduire le bus', taskStatus:true, id: 2,user:'Bernard' }),
  ];
  filteredTodoList: Todo[]= [];

  search:string='';
 
  constructor(){
    this.filterTask();
  }

  getNewTodo():Todo{
    return new Todo();
  }

  saveTask(data:Todo):void{
    const idExist = this.todoList.find(item=> item.id==data?.id)
    if(!idExist)
     this.todoList.push(data);
  }

  deleteTask(id:number|undefined):void{ 
    const index = this.todoList.findIndex(item=> item.id==id)
    this.todoList.splice(index,1)
  }
  getOneById(id:number):Todo{

    const task = this.todoList.find(item=> item.id == id)
    return task || new Todo()

  }

  filterTask(){
    if(this.search){
      this.filteredTodoList = this.todoList.filter(item=> item.user == this.search)
    }else{
      this.filteredTodoList = this.todoList
    }

  }
}