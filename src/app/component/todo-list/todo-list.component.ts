import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public todo: TodoService) { }

  deleteTodo(id:number){
    this.todo.todoList=this.todo.todoList.filter((v,i)=> i !== id)
    }
    
  ngOnInit(): void {

  }

}
