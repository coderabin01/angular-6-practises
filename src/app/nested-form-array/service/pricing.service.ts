import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pricing } from '../model/pricing';

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  private baseIP = 'http://18.188.31.237/';
  private getDataForPricingURL = `${this.baseIP}api/vendor/GetVendorServiceRates/`;

  constructor(
    private http: HttpClient
  ) { }

  getDataForPricing(arrayOfIds: any): Observable<any> {
    return this.http.post(this.getDataForPricingURL, arrayOfIds);
  }
}
