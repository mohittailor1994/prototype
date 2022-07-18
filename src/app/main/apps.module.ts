import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { PastDueComponent } from './past-due/past-due.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ProjectComponent } from './project/project.component';
import { CurrentProjectComponent } from './current-project/current-project.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { CurrentTimesheetComponent } from './current-timesheet/current-timesheet.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from '../error.interceptor';

const routes: Routes = [

  {
    path     : 'home',
    component: HomeComponent
  },
  {
    path     : 'past-due',
    component: PastDueComponent
  },
  {
    path     : 'current-timesheet',
    component: CurrentTimesheetComponent
  },
  {
    path     : 'project',
    component: ProjectComponent
  },
  {
    path     : 'current-project',
    component: CurrentProjectComponent
  }
];

@NgModule({
  declarations: [
    PastDueComponent,
    ToolbarComponent,
    BreadcrumbComponent,
    ProjectComponent,
    CurrentProjectComponent,
    CurrentTimesheetComponent,
    RegisterComponent,
    HomeComponent
  ],
  exports: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoginModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    }
  ],
})
export class AppsModule { }
