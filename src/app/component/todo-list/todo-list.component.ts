import { Component, OnInit } from '@angular/core';
import { Todo, TodoInterface } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public todo: TodoService) { }

  ngOnInit(): void {

  }

}
