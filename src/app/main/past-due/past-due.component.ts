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
  {period: '07/04/2022 - 07/10/2022', status: 'Current Period', ragular: '0.00', overtime: '0.00', totalHours: '0', attachment: '-',client: 'Anthem'},
  {period: '06/27/2022 - 07/03/2022', status: 'Past Due', ragular: '0.00', overtime: '0.00', totalHours: '0', attachment: '-',client: 'Anthem'},
  {period: '06/20/2022 - 06/26/2022', status: 'Past Due', ragular: '0.00', overtime: '0.00', totalHours: '0', attachment: '-',client: 'Anthem'},
  {period: '06/13/2022 - 06/19/2022', status: 'Past Due', ragular: '0.00', overtime: '0.00', totalHours: '0', attachment: '-',client: 'Anthem'},
  {period: '06/06/2022 - 06/12/2022', status: 'Past Due', ragular: '0.00', overtime: '0.00', totalHours: '0', attachment: '-',client: 'Anthem'},
];

@Component({
  selector: 'app-past-due',
  templateUrl: './past-due.component.html',
  styleUrls: ['./past-due.component.scss']
})
export class PastDueComponent implements OnInit {

  title = 'Past Due TimeSheet';
  dataSource = ELEMENT_DATA;
  timesheetColumns: string[] = ['actions', 'period', 'status', 'ragular', 'overtime', 'totalHours', 'attachment', 'client'];
  private _onDestroy = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }
}
