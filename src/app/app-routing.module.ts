import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/pages/login/login.component';
import { SecureComponent } from './component/pages/secure/secure.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { AuthGuard} from './guards/auth.guard';

const routes: Routes = [
{path:'home', component: HomeComponent},
{path:'login', component: LoginComponent},
{path:'todo', component: TodoFormComponent},
{path:'secure', component: SecureComponent, canActivate:[AuthGuard]},
{path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
