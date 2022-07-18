import { Component, OnInit } from '@angular/core';
import { PrototypeServiceService } from '../service/prototype-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private prototypeServiceService: PrototypeServiceService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.prototypeServiceService.logout();
  }
}
