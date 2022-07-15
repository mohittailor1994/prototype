import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrototypeServiceService } from '../service/prototype-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: any;
  loginForm: FormGroup;
  @Output() submitEM = new EventEmitter();


  constructor( private route: ActivatedRoute,
               private router: Router,
               private _formBuilder: FormBuilder,
               private apiService: PrototypeServiceService) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email   : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

    localStorage.removeItem('token');
  }

  get hasError() { return this.loginForm.controls; }

  submit() {
      if (this.loginForm.invalid) {
        return;
      }
      this.apiService.login(this.hasError.email.value, this.hasError.password.value )
        .pipe(first())
        .subscribe({
          next: () => {
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
            this.router.navigateByUrl(returnUrl);
          },
          error: (error: any) => {
            this.error = error;
          }
        });
      // if (this.form.value.username === 'admin' && this.form.value.password === 'admin'){
      //   this.error = null;
      //   this.router.navigate(['/home']);
      // } else{
      //   this.error = 'Username or password invalid';
      // }
    }
}
