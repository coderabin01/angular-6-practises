import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-array',
  templateUrl: './item-array.component.html',
  styleUrls: ['./item-array.component.scss']
})
export class ItemArrayComponent implements OnInit {

  userForm: FormGroup;
  // address: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: this.formBuilder.array([ this.createItem() ])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      tempAddress: ['', Validators.required],
      permanentAddress: '',
    });
  }

  submit(value) {
    console.log(value);
  }
}
