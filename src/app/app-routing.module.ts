import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/pages/login/login.component';
import { SecureComponent } from './component/pages/secure/secure.component';

const routes: Routes = [
{path:'home', component: HomeComponent},
{path:'login', component: LoginComponent},
{path:'secure', component: SecureComponent},
{path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
