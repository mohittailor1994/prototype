import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

export class User {
  message: null;
  isAuthenticated: boolean;
  userName: string;
  email: string;
  roles: [];
  token: string;
  refreshTokenExpiration: string
}

@Injectable({
  providedIn: 'root'
})
export class PrototypeServiceService {

  constructor(
    private router: Router,
    private http: HttpClient
  )
  {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  registerUser(data: any) {
    return this.http.post(environment.api + 'timesheet/api/user/register', data )
  }

  currentProject(data: any) {
    return this.http.post(environment.api + 'timesheet/api/user/project', data)
  }

  login(email: any, Password: any) {
    const body = {
      "Password": Password,
      "email": email,
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    debugger
    return this.http.post<any>(environment.api + `timesheet/api/user/token`, body, { headers: headers})
      .pipe(map((user: User) => {
        debugger
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          debugger
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        }
        return user;
      }));
  }
}
