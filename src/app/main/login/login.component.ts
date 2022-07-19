import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrototypeServiceService } from '../service/prototype-service.service';
import { first } from 'rxjs/operators';
import { NotificationService } from '../service/prototype-notification.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm: FormGroup;
  @Output() submitEM = new EventEmitter();


  constructor( private route: ActivatedRoute,
               private router: Router,
               private _formBuilder: FormBuilder,
               private notification: NotificationService,
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
      this.loading = true;
      if (this.loginForm.invalid) {
        this.loading = false;
        this.notification.showError('Username or password is incorrect', 'error');
        return;
      }
      this.apiService.login(this.hasError.email.value, this.hasError.password.value )
        .pipe(first())
        .subscribe({
          next: () => {
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
            this.router.navigateByUrl(returnUrl);
            this.loading = false;
          },
          error: (error: any) => {
            this.loading = false;
            this.notification.showError('Username or password is incorrect', 'error')
          }
        });
    }
}
