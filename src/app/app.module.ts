import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/pages/login/login.component';
import { AuthService } from './services/auth.service';
import { SecureComponent } from './component/pages/secure/secure.component';
import { NotificationService } from './services/notification.service';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SecureComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, NotificationService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
