
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { PricingService } from '../nested-form-array/service/pricing.service';
import { Pricing } from './../nested-form-array/model/pricing';

@Component({
  selector: 'nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {
  pricing = {};
  mainatenances: any = [ ];
  rates: any = [];
  pricingForm: FormGroup;

  constructor(
    private pricingService: PricingService,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getData();
    this.pricingForm = this.setUpForm(this.pricing, this.mainatenances);
  }

  getData(): void {
    const data = [
      {
        'serviceTypeId': 1,
        'subServiceTypeId': 1,
        'maintenanceTypeId': 1
      },
      {
        'serviceTypeId': 1,
        'subServiceTypeId': 2,
        'maintenanceTypeId': 1
      },
      {
        'serviceTypeId': 1,
        'subServiceTypeId': 1,
        'maintenanceTypeId': 2
      },
      {
        'serviceTypeId': 1,
        'subServiceTypeId': 2,
        'maintenanceTypeId': 2
      }
    ];
    this.pricingService.getDataForPricing(data)
    .subscribe((success: any) => {
      this.pricing = success.body;
      console.log(this.pricing);
      this.mainatenances = success.body.maintenances;
      this.pricingForm = this.setUpForm(this.pricing, this.mainatenances);
    });
  }

  setUpForm(pricing, mainatenances): any {
    // console.log(mainatenances)
    return this._fb.group({
      vendorDispatchLocationId: [pricing.vendorServiceTypeId],
      mainatenances: new FormArray(mainatenances.map((maintenance) => this.createMaintenaneForm(maintenance)))
    });
  }

  createMaintenaneForm(maintenance: any): FormGroup {
    this.rates = maintenance.rates;
    return this._fb.group({
      vendorMaintenanceTypeId: [maintenance.vendorMaintenanceTypeId || null],
      maintenanceTypeName: new FormControl(maintenance.maintenanceTypeName || null),
      rates: this._fb.array(this.rates.map(rate => this.createRatesGroup(rate)))
    })
  }

  createRatesGroup(rate): FormGroup {
    return this._fb.group({
      vendorSubServiceTypeId : [rate.vendorSubServiceTypeId || null],
      vendorServiceRatesId : [rate.vendorServiceRatesId || null],
      hookupandmileagerate : [null],
      hourlyRate : [null],
      flatRate : [null],
      hookRate : [null],
      freeMileage : [null]
    });
  }

  save(): void {
    console.log(this.pricingForm.value);
  }
}


