import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [CustomInputComponent],
  exports: [
    CustomInputComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
