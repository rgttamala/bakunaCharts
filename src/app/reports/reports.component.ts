import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'cio-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  title = 'Bakuna Monthly Reports';
  antigenList:Array<any>;

  constructor(private reportsAPI: ReportService) {
  }

  ngOnInit() {
    //load reports
    this.getReports();

  }

  getReports() {
    this.reportsAPI.getAllAntigen().subscribe(data => this.antigenList = data['data']);
  }

}
