import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { FormField, FormFieldModel } from '../../models/form-field';



@Component({
  selector: 'o-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, OnDestroy {

  dead$: Subject<void> = new Subject();
  @Input() formField!: FormFieldModel | BehaviorSubject<FormFieldModel>;
  @Input() isResetForm: BehaviorSubject<boolean> = new BehaviorSubject(false);
  formFieldRef!: FormFieldModel;
  dynamicForm!: FormGroup;
  @Output() oSubmit: EventEmitter<any> = new EventEmitter();
  @Output() oCancel: EventEmitter<any> = new EventEmitter();
  @Output() oReset: EventEmitter<any> = new EventEmitter();
  @Output() ddlChange: EventEmitter<any> = new EventEmitter();
  isSubmitted: boolean = false;
  files: any;
  previewUrls: { [key: string]: string } = {};
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    console.log(this.formField);

    if (this.formField && this.formField instanceof BehaviorSubject) {
      this.formField.pipe(takeUntil(this.dead$)).subscribe((value: any) => {
        this.createFormGroup(value);
      });

    } else if (this.formField) {
      this.createFormGroup(this.formField);
    }
    else { }
    this.isResetForm.pipe(takeUntil(this.dead$)).subscribe((value: boolean) => {
      if (value) {
        this.dynamicForm.reset();
      }
    })
  }
  ngOnDestroy() {
    this.dead$.next();
    this.dead$.complete();
  }

  createFormGroup(field: FormFieldModel) {
    this.formFieldRef = field;
    const group: { [key: string]: any } = {};

    field.fields.forEach((formField: FormField) => {
      const validatorsArray = [];

      if (formField.required) {
        validatorsArray.push(Validators.required);
      }

      if (formField.type === 'phone') {
        validatorsArray.push(phoneValidator());
      }

      group[formField.name] = [formField.value, validatorsArray];
    });

    this.dynamicForm = this.fb.group(group);
  }
  onButtonClick(arg0: string) {
    if (arg0.toLowerCase() === 'submit') {
      if (this.dynamicForm.invalid) {
        this.isSubmitted = true;
        return;
      }
      const form = this.dynamicForm.value;
      // if(this.files && this.files[]){}
      this.oSubmit.emit(form);
    }
    else if (arg0.toLowerCase() === 'reset') {
      this.dynamicForm.reset();
      const form = this.dynamicForm.value;
    }
  }
  onChangeEvent(event: any, name: string) {
    this.ddlChange.emit({ 'name': name, 'value': event?.target?.value });
    let serial = this.formFieldRef.fields.find((field: any) => field.name === name);
    const data = this.formFieldRef.fields.filter(f => f.serial > (serial?.serial ?? 0) && f.type == 'select');
    if (data && data.length > 0) {
      data.forEach(element => {
        this.dynamicForm.controls[element.name].setValue('0');
      });
    }
  }

}
export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
    const valid = phoneNumberRegex.test(control.value);
    return valid ? null : { 'invalidPhone': true };
  };
}