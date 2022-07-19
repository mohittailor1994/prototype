import { Component, OnInit } from '@angular/core';
import { PrototypeServiceService } from '../service/prototype-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  userName: any;
  email: any;
  constructor(private prototypeServiceService: PrototypeServiceService) {
    setTimeout(() => {
      const user = JSON.parse(<any>localStorage.getItem('user'));
      this.userName = user?.userName;
      this.email = user?.email;
    }, 2000);
  }

  ngOnInit(): void {
  }

  logOut() {
    this.prototypeServiceService.logout();
  }
}
