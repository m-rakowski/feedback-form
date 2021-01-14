// import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
//
// export function shouldNotContainNumbers(control: FormControl) : ValidatorFn {
//   const isSpace = (control.value || '').match(/\d/g);
//   return isSpace ? {shouldNotContainNumbers: true} : null;
// }
//
// export function integer(): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } => {
//     const isNotOk = Number(control.value) < 0;
//     return isNotOk ? { nonPositive: { value: control.value } } : null;
//   };
// }
// export function integer(): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } => {
//     const isNotOk = Number(control.value) < 0;
//     return isNotOk ? { nonPositive: { value: control.value } } : null;
//   };
// }
