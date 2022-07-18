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
  refreshTokenExpiration: string;
  access_token: User;
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
    return this.http.post(environment.endpointUrl + 'timesheet/api/user/register', data)
  }

  currentProject(data: any) {
    return this.http.post(environment.endpointUrl + 'timesheet/api/user/project', data)
  }

  login(email: any, Password: any) {
    const body = {
      "Password": Password,
      "email": email,
    };
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
    });
    return this.http.post<any>(environment.endpointUrl + `timesheet/api/user/token`, body, { headers: headers})
      .pipe(map((user: User) => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
   localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
