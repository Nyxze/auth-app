import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public todoService: TodoService,
    private security: AuthService,
    private router: Router,
    private notif: NotificationService) { }

    
  ngOnInit(): void {

  }

  taskEdit(task:Todo):void{
    if(task.user== this.security.user.login){
      this.router.navigate(['/todo-form',task.id])
    }else{
      this.notif.setMessage(`Vous ne pouvez pas modifier cette tâche`)
    }
  }

}
