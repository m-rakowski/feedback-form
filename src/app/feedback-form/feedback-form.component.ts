import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FeedbackForm} from './model/feedback-form';
import {IFormGroup, IFormBuilder} from '@rxweb/types';
import {CustomValidators} from './custom-validators';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  formGroup: IFormGroup<FeedbackForm>;
  formBuilder: IFormBuilder;

  constructor(private router: Router, formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  // Name should be longer than 5 characters and not contain a number
  // Company Name should not be empty
  // Job Title should not be empty
  // Years in current role should not be empty, should be an integer >0 and <50
  // What do you like about marketing corp should not be empty

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group<FeedbackForm>({
      name: [null, [Validators.required, Validators.minLength(6), CustomValidators.shouldNotContainNumbers()]],
      companyName: [null, [Validators.required]],
      jobTitle: [null, [Validators.required]],
      yearsInCurrentRole: [null, [Validators.required, CustomValidators.shouldBeInteger(), Validators.min(1), Validators.max(49)]],
      comment: [null, [Validators.required]]
    });

    this.formGroup.controls.companyName.valueChanges.subscribe((value) => {
      if (value === 'example') {
        this.formGroup.setValue({
          name: 'Example INC CEO',
          companyName: 'Example INC',
          comment: 'example inc comment',
          jobTitle: 'example job title',
          yearsInCurrentRole: 10
        });
      }
    });
  }

  send(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      console.log(this.formGroup.value);
      this.router.navigate(['thankyou'], {queryParams: {companyName: this.formGroup.get('companyName').value}});
    }
  }
}
