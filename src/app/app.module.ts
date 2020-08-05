import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrgyReportComponent } from './brgy-report/brgy-report.component';
import { ReportsComponent } from './reports/reports.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportService } from './services/report.service';
import { AllBrgyReportsComponent } from './all-brgy-reports/all-brgy-reports.component';

@NgModule({
  imports:      [ ReactiveFormsModule, BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, BrgyReportComponent, ReportsComponent, AllBrgyReportsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ReportService],
})
export class AppModule { }
