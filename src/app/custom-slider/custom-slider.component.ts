import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.scss']
})
export class CustomSliderComponent implements OnInit {
  @ViewChild('slider') slider;
  value: number;
  lowPercent: number;
  midPercent: number;
  highPercent: number;

  background: string;
  data: any;
  constructor() { }

  ngOnInit() {
    this.data = {
      lowRate: '0-20',
      midRate: '20-60',
      highRate: '60-90'
    };
    this.passRangeData(this.data);
  }

// Is it sure that low rate, mid rate & high rate value is also provided by API?

  passRangeData(value) {
    let lowRateArray = value.lowRate.split('-');
    let midRateArray = value.midRate.split('-');
    let highRateArray = value.highRate.split('-');

    const diff = this.getDifference(highRateArray[1], lowRateArray[0]);

    this.lowPercent = this.getPercentage(lowRateArray, diff);

    const midRangePercentage = this.getPercentage(midRateArray, diff);
    this.midPercent = this.lowPercent + midRangePercentage;

    this.setSliderBackgroundColorRange();
  }

  setSliderBackgroundColorRange() {
    this.background = 'to right, #f70616 ' + this.lowPercent + '%, #FF9900 ' + this.lowPercent + '% ' + this.midPercent + '%, green ' + this.midPercent + '%';
  }

  getDifference(maxValue, minValue) {
    return maxValue - minValue;
  }

  getPercentage(lowRateArray, difference) {
    const valueInPercent = ((lowRateArray[1] - lowRateArray[0]) / difference) * 100;
    const percent = Math.round(valueInPercent);
    return percent;
  }

  slideValue(value) {
    console.log(value);
    this.slider.nativeElement.value = value;
  }

}
