import {AbstractControl, ValidatorFn} from '@angular/forms';

export class CustomValidators {

  static shouldBeInteger(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (Number.isInteger(Number(control.value))) {
        return null;
      }
      return {
        shouldBeInteger: true
      };
    };
  }

  static shouldNotContainNumbers(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!(control.value && control.value.match(/.*\d.*/g))) {
        return null;
      }
      return {
        shouldNotContainNumbers: true
      };
    };
  }
}
