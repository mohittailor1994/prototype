import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrototypeServiceService } from '../service/prototype-service.service'

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
      id: new FormControl(),
      month: new FormControl('', Validators.required),
      consultant: new FormControl('', Validators.required),
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
      projectDescription: new FormControl('', Validators.required),
      technologiesUsed: new FormControl('', Validators.required),
      roleAndResponsibillities: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      user_id: new FormControl('', Validators.required),
      created_by: new FormControl('', Validators.required),
      created_at: new FormControl('', Validators.required),
      modified_by: new FormControl('', Validators.required),
      modified_date: new FormControl('', Validators.required),
    });
  }

  save() {
    const projectObj = {
      "id": 0,
      "consultant": this.currentProjectFormData.value.consultant,
      "startDate": this.currentProjectFormData.value.startDate,
      "endDate": this.currentProjectFormData.value.endDate,
      "scheduleEndDate": this.currentProjectFormData.value.scheduleDate,
      "endClientName": this.currentProjectFormData.value.endClient,
      "positionTitle": this.currentProjectFormData.value.position,
      "industry": this.currentProjectFormData.value.industry,
      "workPhone": this.currentProjectFormData.value.workPhone,
      "workFax": this.currentProjectFormData.value.workFax,
      "workEmail": this.currentProjectFormData.value.workEmail,
      "workManager": this.currentProjectFormData.value.workManager,
      "workManagerPhone": this.currentProjectFormData.value.workManagerPhone,
      "workManagerEmail": this.currentProjectFormData.value.workManagerEmail,
      "workAddress": this.currentProjectFormData.value.workAddress,
      "city": this.currentProjectFormData.value.city,
      "state": this.currentProjectFormData.value.state,
      "zipCode": this.currentProjectFormData.value.zip,
      "projectDescription": this.currentProjectFormData.value.projectDescription,
      "technologiesUsed": this.currentProjectFormData.value.technologiesUsed,
      "roleAndResponsibillities": this.currentProjectFormData.value.roleAndResponsibillities,
      "userId": this.currentProjectFormData.value.user_id,
      "createdBy": this.currentProjectFormData.value.created_by,
      "createdDate": this.currentProjectFormData.value.created_at,
      "modifiedBy": this.currentProjectFormData.value.modified_by,
      "modifiedDate": this.currentProjectFormData.value.modified_date
    }
    this.apiService.currentProject(projectObj).subscribe((res: any) => {

    })
  }
}
