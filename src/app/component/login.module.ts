import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class LoginsModule { }
