import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

const ELEMENT_DATA = [
  {mondayHours: '0', tuesdayHours: '0', wednesdayHours: '0', thursdayHours: '0', fridayHours: '0', saturdayHours: '0',sundayHours: '0', name: 'ST/HR', totalHours: '0.00', symbol: 'H'},
  {mondayHours: '0', tuesdayHours: '0', wednesdayHours: '0', thursdayHours: '0', fridayHours: '0', saturdayHours: '0',sundayHours: '0', name: 'OT/HR', totalHours: '0.00', symbol: 'H'},
];

@Component({
  selector: 'app-current-timesheet',
  templateUrl: './current-timesheet.component.html',
  styleUrls: ['./current-timesheet.component.scss']
})
export class CurrentTimesheetComponent implements OnInit {

  title = 'Time Worked';
  dataSource = ELEMENT_DATA;
  timesheetColumns: string[] = ['actions', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'total'];
  private _onDestroy = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
