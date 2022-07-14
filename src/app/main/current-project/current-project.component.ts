import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-current-project',
  templateUrl: './current-project.component.html',
  styleUrls: ['./current-project.component.scss']
})
export class CurrentProjectComponent implements OnInit {

  currentProjectFormData: FormGroup;

  constructor() {   }

  ngOnInit(): void {
    this.currentProjectFormData = new FormGroup({
      id: new FormControl(),
      month: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      scheduleDate: new FormControl('', Validators.required),
      workAddress: new FormControl('', Validators.required),
      workManager: new FormControl('', Validators.required),
      workManagerPhone: new FormControl('', Validators.required),
      workEmail: new FormControl('', Validators.required),
      workFax: new FormControl('', Validators.required),
      workPhone: new FormControl('', Validators.required),
      industry: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      endClient: new FormControl('', Validators.required),
      workManagerEmail: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
    });
  }

  save(value: any, valid: boolean, $event: any) {
    return;
  }
}
