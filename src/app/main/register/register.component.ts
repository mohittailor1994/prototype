import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { PrototypeServiceService } from '../service/prototype-service.service';
import { first } from 'rxjs/operators';
import {NotificationService} from "../service/prototype-notification.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private notification: NotificationService,
              private apiService: PrototypeServiceService) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.registerForm.valid) {
      const userData = {
        "FirstName": this.registerForm.value.first_name,
        "LastName": this.registerForm.value.last_name,
        "UserName": this.registerForm.value.username,
        "email": this.registerForm.value.email,
        "PassWord": this.registerForm.value.password,
      };
      this.apiService.registerUser(userData)
        .subscribe((res: any) =>{
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'login';
          this.router.navigateByUrl(returnUrl);
          this.notification.showSuccess(res.result, 'success');

        },  (error: any) => {

      } )
    } else {
      this.notification.showError('Please fill all mandatory field', 'Invalid')
    }
  }

}
