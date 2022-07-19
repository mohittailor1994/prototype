import { Injectable } from '@angular/core';

import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('token');
    return next.handle(
      req.clone({
        headers: req.headers.append('Authorization', `Bearer ${accessToken}`)
      })
    );
  }

}
