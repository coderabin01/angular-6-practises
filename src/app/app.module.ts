import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';

// Load Widgets
import * as Widgets from 'fusioncharts/fusioncharts.widgets';

// Load FusionTheme Theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemArrayComponent } from './item-array/item-array.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { MatSliderModule } from '@angular/material';
import { NestedFormArrayComponent } from './nested-form-array/nested-form-array.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { FusionChartComponent } from './fusion-chart/fusion-chart.component';




// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    FormArrayComponent,
    ItemArrayComponent,
    SliderComponent,
    NestedFormArrayComponent,
    NestedFormComponent,
    CustomSliderComponent,
    FusionChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FusionChartsModule // Include in imports
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
