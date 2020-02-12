import { Directive, Input, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[connectForm]' })
export class ConnectFormDirective  {

  @Input('connectForm')
  set data(val: any) {
    if (val) {
      this.formGroupDirective.form.patchValue(val);
      this.formGroupDirective.form.markAsPristine();
    } else {
      this.formGroupDirective.resetForm();
    }
  }

  constructor(private formGroupDirective: FormGroupDirective, private actions$: Actions) { }
}