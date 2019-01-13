import { Component, OnInit } from '@angular/core';
import { PricingService } from './service/pricing.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { Pricing, Maintenance, Rates } from './model/pricing';
import { getAllRouteGuards } from '@angular/router/src/utils/preactivation';

@Component({
  selector: 'app-nested-form-array',
  templateUrl: './nested-form-array.component.html',
  styleUrls: ['./nested-form-array.component.scss']
})
export class NestedFormArrayComponent implements OnInit {
  pricing: Pricing = new Pricing();
  maintenances: any = [];
  rates: any = [];
  pricingForm: FormGroup;

  constructor(
    private pricingService: PricingService,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getData();
    this.pricingForm = this.setUpForm();
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
      this.maintenances = success.body.maintenances;
      this.pricingForm = this.setUpForm();
    });
  }

  setUpForm(): any {
    return this._fb.group({
      vendorDispatchLocationId: [this.pricing.vendorServiceTypeId],
      maintenances: this._fb.array(this.maintenances.map((maintenance) => this.createMaintenaneForm(maintenance)))
    });
  }

  createMaintenaneForm(maintenance: Maintenance): FormGroup {
    this.rates = maintenance.rates;
    return this._fb.group({
      vendorMaintenanceTypeId: [maintenance.vendorMaintenanceTypeId, [Validators.required, Validators.pattern('[0-9]*')]],
      maintenanceTypeName: [maintenance.maintenanceTypeName || null],
      rates: this._fb.array(this.rates.map(rate => this.createRatesGroup(rate)))
    })
  }

  createRatesGroup(rate: Rates): FormGroup {
    return this._fb.group({
      vendorSubServiceTypeId : [rate.vendorSubServiceTypeId, [Validators.required,  Validators.pattern('[0-9]*')]],
      vendorServiceRatesId : [rate.vendorServiceRatesId || null],
      hookupandmileagerate : [null],
      hourlyRate : [null],
      flatRate : [null],
      hookRate : [null],
      freeMileage : [null]
    });
  }

  getMaintenanceControls() {
    return this.pricingForm.get('maintenances') as FormArray;
  }


  getRateControls() {
    return this.pricingForm.get('rates') as FormArray;
  }

  save(): void {
    console.log(this.pricingForm.value);
  }
}
