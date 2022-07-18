import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, exhaustMap} from 'rxjs/operators';
import { PrototypeServiceService } from './main/service/prototype-service.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: PrototypeServiceService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      console.log('error', err);
      if ([401, 406, 403, 467].indexOf(err.status) !== -1) {
        console.log('authentication logout');
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        this.authenticationService.logout();
      }

      const error = err.error.message || err.statusText;
      return throwError(error);

    }));
  }
}
