import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { AuthService } from 'src/app/services/auth.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todo: Todo;

  constructor(public todoService: TodoService, private router: Router, private currentRoute: ActivatedRoute, public security:AuthService) {
    this.todo = this.todoService.getNewTodo();
    currentRoute.params.subscribe(params=> {
      const id = params['id']
      this.todo = this.todoService.getOneById(id)
     

    })
  }

  ngOnInit(): void {
  
  }

  validateForm() {
    
      this.todoService.saveTask(this.todo);
      this.router.navigate(['/todo-list']);
    
}


}

// export class TodoFormComponent implements OnInit {

//   constructor(public todo: TodoService) { }

//   ngOnInit(): void {
//      this.todo.getData()

//   }

// }
