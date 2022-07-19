import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppsModule } from './main/apps.module';
import { RegisterComponent } from './main/register/register.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastModule ,ToastService } from 'ng-uikit-pro-standard';
import {NotificationService} from "./main/service/prototype-notification.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const appRoutes: Routes = [
  {
    path        : '',
    loadChildren: () => import('../app/main/apps.module').then(m => m.AppsModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {relativeLinkResolution: 'legacy'}),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ToastModule.forRoot(),
    NgbModule,
    AppsModule
  ],
  providers: [ToastService,
  NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
