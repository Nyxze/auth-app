import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

const TODO_KEY = 'todos';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: Todo[] = [
    new Todo({
      taskName: 'Traire les vaches',
      taskStatus: true,
      id: 1,
      user: 'Rene',
    }),
    new Todo({
      taskName: 'Conduire le bus',
      taskStatus: true,
      id: 2,
      user: 'Bernard',
    }),
  ];
  filteredTodoList: Todo[] = [];

  search: string = '';

  constructor(private storage: LocalStorageService,
               private security:AuthService,
               private notif:NotificationService) {
    this.loadFromStorage();
    this.filterTask();
  }

  getNewTodo(): Todo {
    return new Todo();
  }

  saveTask(data: Todo): void {
    const idExist = this.todoList.find((item) => item.id == data?.id);
    if (!idExist) {
      this.todoList.push(data);
    }

    this.persist();
  }

  deleteTask(id: number | undefined): void {
    const index = this.todoList.findIndex((item) => item.id == id);

    if(index>=0){
      const todo = this.todoList[index];
      if(todo.user = this.security.user.login){
        this.todoList.splice(index, 1);
        this.persist();
      }else{
        this.notif.setMessage("Vous n'avez pas les droits pour delete")
    }
    }
    
  }
  getOneById(id: number): Todo {
    const task = this.todoList.find((item) => item.id == id);
    return task || new Todo();
  }

  filterTask() {
    if (this.search) {
      this.filteredTodoList = this.todoList.filter(
        (item) => item.user == this.search
      );
    } else {
      this.filteredTodoList = this.todoList;
    }
  }

  loadFromStorage(): void {
    const rawData = this.storage.retrieve(TODO_KEY);
    if (rawData) {
      const data = JSON.parse(rawData);
      this.todoList = data;
    }
  }

  persist(): void {
    this.storage.store(TODO_KEY, JSON.stringify(this.todoList));
  }
}
