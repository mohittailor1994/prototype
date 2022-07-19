import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-spiner',
  templateUrl: './progress-spiner.component.html',
  styleUrls: ['./progress-spiner.component.scss']
})
export class ProgressSpinerComponent implements OnInit {

  @Input() visible = false;

  constructor() { }

  ngOnInit(): void {

  }

  start(): void {
    this.visible = true;
  }

  stop(): void {
    this.visible = false;
  }

}
