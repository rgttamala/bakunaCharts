import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ReportService } from '../services/report.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';


declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'brgy-report',
  templateUrl: './brgy-report.component.html',
  styleUrls: ['./brgy-report.component.css']
})

export class BrgyReportComponent implements OnInit {
  brgyForm: FormGroup;

  constructor(private reportsAPI: ReportService, private http: HttpClient) {

  }

  Pangi = [3, 1, 11, 5, 21, 10, 14, 16, 20, 5, 3, 7];
  Aplaya = [4, 6, 10, 15, 5, 6, 7, 10, 13, 17, 11, 9];
  Crossing = [1, 2, 5, 14, 16, 20, 5, 3, 7, 5, 12, 11];
  selectedMonth = [];
  aplayaCount = [];
  pangiCount = [];
  crossingCount = [];
  allCount = [];
  calculatedMonthly = [];
  calculatedAll = [];
  total = [];
  fixedCalculatedValues = [];

  testData = [{
    "month": "January",
    "year": 2020,
    "Matina Aplaya": 28,
    "Matina Pangi": 20,
    "Matina Crossing": 20,
    "all": 68,
    "calculated": 0.11803666666666668
  },
  {
    "month": "February",
    "year": 2020,
    "Matina Aplaya": 20,
    "Matina Pangi": 17,
    "Matina Crossing": 11,
    "all": 48,
    "calculated": 0.08332
  },
  {
    "month": "March",
    "year": 2020,
    "Matina Aplaya": 1,
    "Matina Pangi": 0,
    "Matina Crossing": 1,
    "all": 2,
    "calculated": 0.0034716666666666667
  }];

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  today = new Date();
  month = new Date().getMonth();
  currentYear = new Date().getFullYear();

  currentMonth = this.months[new Date().getMonth()];

  monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  yearList = [];

  selectedYear = [];

  antigenNameList = [];//["BCG", "Hepa B", "Pentavalent", "PCV", "OPV", "IPV", "MCV 1", "MCV 2", "Vitamin A", "Deworming"];
  reportType = 'column';//'bar';
  brgyReportTitle = 'Chilhood Immunization (Monthly)';
  calculatedReportTitle = 'Population Growth Rate (Monthly)';
  subtitleCityHealth = 'Source: Davao City Health (District 1)'
  // allReportTitle = 'Population Growth Rate (Monthly All)';


  //reportSubtitle = 'Source: City Health (Brgy. '+this.brgyName+')';
  xAxisTitle = 'Number of children'

  public aplaya: any = {
    chart: {
      type: this.reportType

    },
    title: {
      text: this.brgyReportTitle
    },
    subtitle: {
      text: 'Source: City Health (Brgy. Matina Aplaya)'
    },
    xAxis: {
      categories: this.monthList
    },
    yAxis: {
      title: {
        text: this.xAxisTitle
      },
      stackLabels: {
        // enabled: true,
      }
    },
    plotOptions: {
      // line: {
      //   dataLabels: {
      //     enabled: true
      //   },
      //   enableMouseTracking: false
      // },
      // bar: {
      //   dataLabels: {
      //     enabled: true
      //   }
      // }
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'Immunized Children',
      data: this.aplayaCount,
      // color: Highcharts.getOptions().colors[1]
    },
      // {
      //   name: 'Female',
      //   data: this.femaleCountList
      // },
    ],
    tooltip: {
      // valueSuffix: ' children',
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>'
      //Total: {point.stackTotal}'
    }
  }


  public pangi: any = {
    chart: {
      type: this.reportType

    },
    title: {
      text: this.brgyReportTitle
    },
    subtitle: {
      text: 'Source: City Health (Brgy. Matina Pangi)'
    },
    xAxis: {
      categories: this.monthList
    },
    yAxis: {
      title: {
        text: this.xAxisTitle
      },
      stackLabels: {
        // enabled: true,
      }
    },
    plotOptions: {
      // line: {
      //   dataLabels: {
      //     enabled: true
      //   },
      //   enableMouseTracking: false
      // },
      // bar: {
      //   dataLabels: {
      //     enabled: true
      //   }
      // }
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'Immunized Children',
      data: this.pangiCount,
      // color: Highcharts.getOptions().colors[6]
    },
      // {
      //   name: 'Female',
      //   data: this.femaleCountList
      // },
    ],
    tooltip: {
      // valueSuffix: ' children',
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>'
      //Total: {point.stackTotal}'
    }
  }


  public crossing: any = {
    chart: {
      type: this.reportType

    },
    title: {
      text: this.brgyReportTitle
    },
    subtitle: {
      text: 'Source: City Health (Brgy. Matina Crossing)'
    },
    xAxis: {
      categories: this.monthList
    },
    yAxis: {
      title: {
        text: this.xAxisTitle
      },
      stackLabels: {
        // enabled: true,
      }
    },
    plotOptions: {
      // line: {
      //   dataLabels: {
      //     enabled: true
      //   },
      //   enableMouseTracking: false
      // },
      // bar: {
      //   dataLabels: {
      //     enabled: true
      //   }
      // }
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'Immunized Children',
      data: this.crossingCount
    },
      // {
      //   name: 'Female',
      //   data: this.femaleCountList
      // },

    ],
    tooltip: {
      // valueSuffix: ' children',
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>'
      //Total: {point.stackTotal}'
    }
  }

  public areachart: any = {
    chart: {
      type: 'areaspline'
    },
    title: {
      text: this.calculatedReportTitle
    },
    subtitle: {
      text: this.subtitleCityHealth//'Source: City Health (Disctrict 1)'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      // x: 550,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
      categories: this.monthList,
      plotBands: [{ // visualize the weekend
        // from: 4.5,
        // to: 6.5,
        // color: 'rgba(68, 170, 213, .2)'
      }]
    },
    yAxis: {
      title: {
        text: 'Population'
      }
    },

    tooltip: {
      shared: true,
      // valueSuffix: ' units'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
        dataLabels: {
          enabled: true
        }
      },
    },
    series: [
      {
        name: 'Default',
        data: this.fixedCalculatedValues
      },
      {
        name: 'Calculated',
        data: this.calculatedMonthly
      },
    ]
  }

  public calculatedReport: any = {
    chart: {
      type: this.reportType

    },
    title: {
      text: this.calculatedReportTitle
    },
    subtitle: {
      text: this.subtitleCityHealth//'Source: City Health (Disctrict 1)'
    },
    xAxis: {
      categories: this.monthList
    },
    yAxis: {
      title: {
        text: this.xAxisTitle
      },
      stackLabels: {
        // enabled: true,
      }
    },
    plotOptions: {

      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [
      {
        name: 'Immunized Children',
        data: this.calculatedMonthly,
        color: Highcharts.getOptions().colors[1]
      },
      {
        name: 'Immunized Children',
        data: this.fixedCalculatedValues,
        // color: Highcharts.getOptions().colors[1]
      },

    ],
    tooltip: {
      // valueSuffix: ' children',
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>'
      //Total: {point.stackTotal}'
    }
  }


  public allReport: any = {
    chart: {
      type: this.reportType

    },
    title: {
      text: this.brgyReportTitle
    },
    subtitle: {
      text: this.subtitleCityHealth//'Source: City Health (District 1)'
    },
    xAxis: {
      categories: this.monthList
    },
    yAxis: {
      title: {
        text: this.xAxisTitle
      },
      stackLabels: {
        // enabled: true,
      }
    },
    plotOptions: {

      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'Immunized Children',
      data: this.allCount,
      color: Highcharts.getOptions().colors[1]
    },

    ],
    tooltip: {
      // valueSuffix: ' children',
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>'
      //Total: {point.stackTotal}'
    }
  }

  setYear() {
    for (let index = 2016; index <= 2030; index++) {
      this.yearList.push(index);
    }

  }
  ngOnInit() {
    this.setYear();
    console.log(this.yearList);
    //   this.brgyForm = new FormGroup({
    //     month: new FormControl()
    //  });

    // console.log(this.currentMonth);
    // console.log(this.currentYear);

    this.http.get('https://bakunapp.online/api/reportsMonthly').subscribe(
      data => {
        let list = [] as any;
        list.push(data['data']);

        list.forEach(res => {

          const mapped = Object.keys(res).map(key => ({
            type: key,
            value: res[key]
          }));

          for (let x = 0; x < mapped.length; x++) {
            let key = mapped[x].type;

            if (key == 'total') {
              // console.log(key);
              this.total = mapped[x].value;
              // console.log(this.total);
            }

            else if (key == 'calculated') {
              // console.log(key);
              this.calculatedAll = mapped[x].value;
              // console.log(this.calculatedAll);
            }

            else {

              if (mapped[x].value['year'] == this.currentYear) {
                this.aplayaCount.push(mapped[x].value['Matina Aplaya']);
                this.crossingCount.push(mapped[x].value['Matina Crossing']);
                this.pangiCount.push(mapped[x].value['Matina Pangi']);
                this.calculatedMonthly.push(mapped[x].value['calculated']);
                this.fixedCalculatedValues.push(0.02083);
                this.allCount.push(mapped[x].value['all']);
              }
            }

          }
          Highcharts.chart('area-chart', this.areachart);
          Highcharts.chart('container-reports', this.pangi);
          Highcharts.chart('container-reports1', this.aplaya);
          Highcharts.chart('container-reports2', this.crossing);
          Highcharts.chart('container-reports4', this.allReport);



        })
      }
    );


    // var select = document.getElementById('select');
    // select.addEventListener('change', (e) => {
    //   console.log("CHANGED! ");
    // })


  }



}

