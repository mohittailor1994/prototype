import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path        : '',
    loadChildren: () => import('../app/main/apps.module').then(m => m.AppsModule),
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
