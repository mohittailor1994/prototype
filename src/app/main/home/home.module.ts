import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCard, MatCardModule } from '@angular/material/card';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CurrencyPipe } from '@angular/common';
import { HomeComponent } from './home.component';
import { PrototypeServiceService } from '../service/prototype-service.service';
import { AppsModule } from '../apps.module';
import { TokenInterceptorService } from '../../token-interceptor';

const routes: Routes = [
  {
    path     : 'home',
    component: HomeComponent,
    resolve  : {
      data: PrototypeServiceService
    }
  },
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonToggleModule,
    AppsModule
  ],
  providers   : [
    PrototypeServiceService,
    CurrencyPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ]
})
export class HomeModule
{
}

