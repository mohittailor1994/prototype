import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() name: any;
  @Input() link: any;
  @Input() home: any;
  constructor() { }

  ngOnInit(): void {
  }

}