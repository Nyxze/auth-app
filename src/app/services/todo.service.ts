import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  readonly url = 'http://localhost:3000/tasks';

  todoList: Observable<Todo[]> = new Observable<Todo[]>();

  filteredTodoList: Todo[] = [];

  search: string = '';

  constructor(
    private security: AuthService,
    private notif: NotificationService,
    private http: HttpClient
  ) {
    this.loadFromApi(this.url);
  }

  getNewTodo(): Todo {
    return new Todo();
  }

  saveTask(data: Todo): void {
    if (!data.id) {
      this.http.post<Todo>(this.url, data).subscribe((data) => {
        console.log('Insert', data);
        this.loadFromApi(this.url);
      });
    } else {
      this.http.put(this.url + '/' + data.id, data).subscribe((data) => {
        console.log('Modify', data);
        this.loadFromApi(this.url);
      });
    }
  }

  deleteTask(id: number | undefined): void {
    const url = this.url + '/' + id;
    if (id == undefined) {
      return;
    }
    this.getOneById(id).subscribe((task) => {
      if (task.user == this.security.user.login) {
        this.http.delete(url).subscribe(() => this.loadFromApi(this.url));
      }
    });
  }
  getOneById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.url + '/' + id);
  }

  filterTask() {
    let url = this.url;
    if (this.search) {
      url += '?user=' + this.search;
    }
    this.loadFromApi(url);
  }

  loadFromApi(url: string): void {
    this.todoList = this.http.get(url).pipe(
      map((res: any) => this.todoMap(res)),
      tap((resp: any) => console.log(resp))
    );
    console.log(this.todoList);
  }

  todoMap(resp: any): Todo[] {
    return resp.map((item: any) => {
      console.log('cc');
      return new Todo(item);
    });
  }
}
