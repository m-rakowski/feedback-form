import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {


  formGroup: FormGroup;

  constructor(private router: Router) {
  }

  // Name should be longer than 5 characters and not contain a number
  // Company Name should not be empty
  // Job Title should not be empty
  // Years in current role should not be empty, should be an integer >0 and <50
  // What do you like about marketing corp should not be empty

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(5)]),
      companyName: new FormControl(null, [Validators.required]),
      jobTitle: new FormControl(null, [Validators.required]),
      yearsInCurrentRole: new FormControl(null, []),
      comment: new FormControl(null, [Validators.required]),
    });
  }

  send(): void {
    this.router.navigate(['thankyou'], {queryParams: {companyName: this.formGroup.get('companyName').value}});
  }
}
