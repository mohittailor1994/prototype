import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: any;
  @Output() submitEM = new EventEmitter();
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      debugger
      if (this.form.value.username === 'admin' && this.form.value.password === 'admin'){
        this.error = null;
        this.router.navigate(['/home']);
      } else{
        this.error = 'Username or password invalid';
      }
    }
  }

}
