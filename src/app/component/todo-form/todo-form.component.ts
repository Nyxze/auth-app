import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todo: Todo;
  constructor(private todoService: TodoService, private router: Router) {
    this.todo = this.todoService.getNewTodo();
  }

  ngOnInit(): void {}

  validateForm() {
    this.todoService.addTask(this.todo);
    this.router.navigate(['/todo-list']);
  }
}

// export class TodoFormComponent implements OnInit {

//   constructor(public todo: TodoService) { }

//   ngOnInit(): void {
//      this.todo.getData()

//   }

// }
