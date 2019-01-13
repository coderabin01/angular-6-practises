import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  userForm: FormGroup;
  aliases: FormArray;

  constructor(
    private _fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.userForm = this._fb.group({
      name: '',
      aliases: this._fb.array([this.createAddressForm()])
    });
  }

  createAddressForm(): FormGroup {
    return this._fb.group({
      tempAddress: '',
      permanentAddress: ''
    });
  }

  submit(value: any) {
    console.log(value);
  }

}
