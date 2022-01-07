import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { AuthService } from 'src/app/services/auth.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit, AfterViewInit {
  todo: Todo;
  @ViewChild('taskForm') taskForm:NgForm|undefined;

  constructor(
    public todoService: TodoService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    public security: AuthService
  ) {
    this.todo = this.todoService.getNewTodo();
    currentRoute.params.subscribe((params) => {
      const id = params['id'];
      this.todo = this.todoService.getOneById(id);
    });
  }
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.taskForm?.setValue(
        {taskName:this.todo.taskName,
          taskStatus:this.todo.taskStatus
          }
          );
    }, 100)
    
  }

  ngOnInit(): void {
  }

  validateForm(taskForm: NgForm) {
    if (taskForm.form.valid) {
      this.todo.taskName = taskForm.form.value.taskName;
      this.todo.taskStatus = taskForm.form.value.taskStatus;
      this.todo.user = this.security.user.login;
      this.todoService.saveTask(this.todo);
      this.router.navigate(['/todo-list']);
    }
  }
}
