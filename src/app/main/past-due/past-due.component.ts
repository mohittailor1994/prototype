import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

export class TimesheetEntry {
  mondayHours:string = '0';
  tuesdayHours:string = '0';
  wednesdayHours:string = '0';
  thursdayHours:string = '0';
  fridayHours:string = '0';
  saturdayHours:string = '0';
  sundayHours:string = '0';
}
const ELEMENT_DATA = [
  {mondayHours: '0', tuesdayHours: '0', wednesdayHours: '0', thursdayHours: '0', fridayHours: '0', saturdayHours: '0',sundayHours: '0', name: 'ST/HR', totalHours: '0.00', symbol: 'H'},
  {mondayHours: '0', tuesdayHours: '0', wednesdayHours: '0', thursdayHours: '0', fridayHours: '0', saturdayHours: '0',sundayHours: '0', name: 'OT/HR', totalHours: '0.00', symbol: 'H'},
];

@Component({
  selector: 'app-past-due',
  templateUrl: './past-due.component.html',
  styleUrls: ['./past-due.component.scss']
})
export class PastDueComponent implements OnInit {

  title = 'Time Worked';
  dataSource = ELEMENT_DATA;
  timesheetColumns: string[] = ['actions', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'total'];
  private _onDestroy = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }
}
