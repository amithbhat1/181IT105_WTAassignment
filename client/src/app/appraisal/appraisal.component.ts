import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AppraisalService } from '../shared/appraisal.service';
import { Appraisal } from '../shared/appraisal.model';

declare var M: any;

@Component({
  selector: 'app-appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.css'],
  providers: [AppraisalService]
})
export class AppraisalComponent implements OnInit {

  constructor(private appraisalService: AppraisalService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshAppraisalList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.appraisalService.selectedAppraisal = {
      _id: "",
    EmployeeID: 0,
    Name: "",
    Department: "",
    Year_under_Review: "",
    Date_of_Review: "",
    Goals :"", 
    AOI :"",
    Core_Values :"",
    Comments : "",
    Rating: 0,
    Reviewed_By : "",
    Reviewer_Position :""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.appraisalService.postAppraisal(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshAppraisalList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.appraisalService.putAppraisal(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshAppraisalList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }


  }

  refreshAppraisalList() {
    this.appraisalService.getAppraisalList().subscribe((res) => {
      this.appraisalService.appraisals = res as Appraisal[];
    });
  }

  onEdit(app: Appraisal) {
    this.appraisalService.selectedAppraisal = app;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure you want to delete this record ?') == true) {
      this.appraisalService.deleteAppraisal(_id).subscribe((res) => {
        this.refreshAppraisalList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
