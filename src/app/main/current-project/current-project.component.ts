import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrototypeServiceService } from '../service/prototype-service.service'
import * as moment from 'moment';

@Component({
  selector: 'app-current-project',
  templateUrl: './current-project.component.html',
  styleUrls: ['./current-project.component.scss']
})
export class CurrentProjectComponent implements OnInit {

  currentProjectFormData: FormGroup;

  constructor(private apiService: PrototypeServiceService) {   }

  ngOnInit(): void {
    this.currentProjectFormData = new FormGroup({
      id: new FormControl(0),
      month: new FormControl(),
      consultant: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      scheduleDate: new FormControl(),
      workAddress: new FormControl(),
      workManager: new FormControl(),
      workManagerPhone: new FormControl(),
      workEmail: new FormControl(),
      workFax: new FormControl(),
      workPhone: new FormControl(),
      industry: new FormControl(),
      position: new FormControl(),
      endClient: new FormControl(),
      workManagerEmail: new FormControl(),
      projectDescription: new FormControl(),
      technologiesUsed: new FormControl(),
      roleAndResponsibillities: new FormControl(),
      zip: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),
      user_id: new FormControl(),
      created_by: new FormControl(),
      created_at: new FormControl(),
      modified_by: new FormControl(),
      modified_date: new FormControl(),
    });
  }

  save() {
    const projectObj = {
      "id": 0,
      "month": "",
      "consultant": this.currentProjectFormData.value.consultant,
      "startdate": moment(this.currentProjectFormData.value.startDate).format('YYYY-MM-DD'),
      "enddate":  moment(this.currentProjectFormData.value.endDate).format('YYYY-MM-DD'),
      "scheduledate": moment(this.currentProjectFormData.value.scheduleDate).format('YYYY-MM-DD'),
      "workaddress": this.currentProjectFormData.value.workAddress,
      "workmanager": this.currentProjectFormData.value.workManager,
      "workmanagerphone": this.currentProjectFormData.value.workManagerPhone,
      "workemail":  this.currentProjectFormData.value.workEmail,
      "workfax": this.currentProjectFormData.value.workFax,
      "workphone": this.currentProjectFormData.value.workPhone,
      "industry": this.currentProjectFormData.value.industry,
      "position": this.currentProjectFormData.value.position,
      "endclient":  this.currentProjectFormData.value.endClient,
      "workmanageremail": this.currentProjectFormData.value.workManagerEmail,
      "projectDescription": this.currentProjectFormData.value.projectDescription,
      "technologiesUsed": this.currentProjectFormData.value.technologiesUsed,
      "roleAndResponsibillities": this.currentProjectFormData.value.roleAndResponsibillities,
      "zip": this.currentProjectFormData.value.zip,
      "state": this.currentProjectFormData.value.state,
      "city": this.currentProjectFormData.value.city,
      "user_id": null,
      "created_by": null,
      "created_at": null,
      "modified_by": null,
      "modified_date": null
    };
    const json = JSON.stringify(projectObj);
    this.apiService.currentProject(json).subscribe((res: any) => {
      if (res.sucess){
        console.log(res.sucess);
      }
    })
  }
}
