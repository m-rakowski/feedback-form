import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  constructor() {
  }

  @Input() control: AbstractControl;
  @Input() label: string;
  @Input() isTextArea: boolean;

  ngOnInit(): void {
  }

}
