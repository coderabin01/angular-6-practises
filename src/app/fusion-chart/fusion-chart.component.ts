import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fusion-chart',
  templateUrl: './fusion-chart.component.html',
  styleUrls: ['./fusion-chart.component.scss']
})
export class FusionChartComponent implements OnInit {
  dataSource = {
    "chart": {
        "caption": "Nordstorm's Customer Satisfaction Score for 2017",
        "lowerLimit": "0",
        "upperLimit": "100",
        "showValue": "1",
        "numberSuffix": "%",
        "theme": "fusion",
        "showToolTip": "0"
    },
    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": "50",
            "code": "#F2726F"
        }, {
            "minValue": "50",
            "maxValue": "75",
            "code": "#FFC533"
        }, {
            "minValue": "75",
            "maxValue": "100",
            "code": "#62B58F"
        }]
    },
    "dials": {
          "dial": [{
              "value": "81"
          }]
    }
  }

  constructor(){}

  ngOnInit() {
  }

}
