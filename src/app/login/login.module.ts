import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
