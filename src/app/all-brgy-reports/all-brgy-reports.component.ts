import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ReportService } from '../services/report.service';
import { HttpClient } from '@angular/common/http';


declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'all-brgy-reports',
  templateUrl: './all-brgy-reports.component.html',
  styleUrls: ['./all-brgy-reports.component.css']
})
export class AllBrgyReportsComponent implements OnInit {
  chart1: Highcharts.Chart;
  chart2: Highcharts.Chart;

  constructor(private http: HttpClient) { }

  maleCountList = [];//[7.0, 6, 5, 5, 14, 21, 25, 15, 13, 10, 9, 6];
  femaleCountList = [];//[9, 4, 7, 8, 11, 15, 17, 16, 14, 10, 6, 4];
  average = [];//[9, 4, 7, 8, 11, 15, 17, 16, 14, 10, 6, 4];
  total = [];//[9, 4, 7, 8, 11, 15, 17, 16, 14, 10, 6, 4];
  antigenNameList = [];//["BCG", "Hepa B", "Pentavalent", "PCV", "OPV", "IPV", "MCV 1", "MCV 2", "Vitamin A", "Deworming"];
  reportSubtitle = 'Source: City Health (District 1)';
  vaccineLabel = 'Total no. of vaccines given';
  MonthlyReportTitle = 'Vaccine Coverage (Monthly)';

  maleBrgyCount = [];
  femaleBrgyCount = [];
  brgyList = [];

  maleBrgyCount2 = [];
  femaleBrgyCount2 = [];
  brgyList2 = [];

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  selectedMonth = [];

  month = new Date().getMonth();
  currentYear = new Date().getFullYear();

  public options: any = {
    title: {
      text: this.MonthlyReportTitle
    },
    subtitle: {
      text: this.reportSubtitle
    },
    xAxis: {
      categories: this.antigenNameList,//['BCG', 'HEPA B', 'Pentavalent', 'PCV', 'OPV']
    },
    labels: {
      items: [{
        // html: this.vaccineLabel,
        style: {
          left: '50px',
          top: '18px',
          color: ( // theme
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'black'
        }
      }]
    },
    series: [
      {
        type: 'column',
        name: 'Male',
        data: this.maleCountList,//[3, 2, 1, 3, 4]
        color: Highcharts.getOptions().colors[9]
      }, {
        type: 'column',
        name: 'Female',
        data: this.femaleCountList,//[2, 3, 5, 7, 6]
        color: Highcharts.getOptions().colors[8]
      },
      {
        type: 'spline',
        name: 'Average',
        data: this.average,//[2, 2, 2, 1.5, 1.5, 1.5,1.5,1.5,1.5, 1.5],
        marker: {
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[3],
          fillColor: 'white'
        }
      },
      // {
      //  type: 'pie',
      //  name: 'Vaccines Monthly Report',
      //  colorByPoint: true,
      //  data: this.total,
      // name: this.antigenNameList
      //       {
      //         name: this.antigenNameList,
      //         y: 2,
      //         color: Highcharts.getOptions().colors[0] // Jane's color
      //       }
      //     ,
      //  center: [100, 80],
      //  size: 100,
      //  showInLegend: false,
      //  dataLabels:
      //  {
      //    enabled: false
      //  },
      // }
    ]
  }

  // public options2: any = {

  //   chart: {
  //     type: 'column'
  //   },

  //   title: {
  //     text: 'Monthly Vaccines, Grouped by Baranggay'
  //   },
  //   subtitle: {
  //     text: 'Source: Davao City Health (District 1)'
  //   },

  //   xAxis: {
  //     categories: ["BCG", "Hepa B", "Pentavalent", "PCV", "OPV", "IPV", "MCV 1", "MCV 2", "Vitamin A", "Deworming"]
  //   },

  //   yAxis: {
  //     allowDecimals: false,
  //     min: 0,
  //     title: {
  //       text: 'Number of vaccines given'
  //     },
  //     stackLabels: {
  //       enabled: true,
  //     }

  //   },

  //   tooltip: {
  //     formatter: function () {
  //       var stackName = this.series.userOptions.stack;

  //       return '<b>Barangay name: </b>' + stackName + '<br/><b>' + this.x + '</b><br/>' +
  //         this.series.name + ': ' + this.y + '<br/>' +
  //         'Total: ' + this.point.stackTotal;
  //     }
  //   },

  //   plotOptions: {
  //     column: {
  //       stacking: 'normal'
  //     }
  //   },

  //   series: [
  //     {
  //       name: 'Matina Crossing (Male)',
  //       data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2],
  //       stack: 'Crossing'
  //     },
  //     {
  //       name: 'Matina Crossing (Female)',
  //       data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5],
  //       stack: 'Crossing'
  //     },
  //     {
  //       name: 'Matina Pangi (Male)',
  //       data: [2, 5, 6, 2, 1, 2, 5, 6, 2, 1],
  //       stack: 'Pangi'
  //     },
  //     {
  //       name: 'Matina Pangi (Female)',
  //       data: [3, 0, 4, 4, 3, 3, 0, 4, 4, 3],
  //       stack: 'Pangi'
  //     },
  //     {
  //       name: 'Matina Aplaya (Male)',
  //       data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2],
  //       stack: 'Aplaya'
  //     },
  //     {
  //       name: 'Matina Aplaya (Female)',
  //       data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5],
  //       stack: 'Aplaya'
  //     }
  //   ]
  // }



  public options3: any = {

    chart: {
      type: 'bar'
    },

    title: {
      text: "This Month's Childhood Immunization (Grouped by Barangay)"
    },
    subtitle: {
      text: 'Source: Davao City Health (District 1)'
    },

    xAxis: {
      categories: this.brgyList2,//['Matina Aplaya', 'Matina Crossing', 'Matina Pangi']//["BCG", "Hepa B", "Pentavalent", "PCV", "OPV", "IPV", "MCV 1", "MCV 2", "Vitamin A", "Deworming"]
      title: {
        text: null
      }
    },

    yAxis: {
      min: 0,
      title: {
        text: 'Population',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' children'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
    },
    credits: {
      enabled: false
    },

    series: [
      {
        name: 'Male',
        data: this.maleBrgyCount2,
        color: Highcharts.getOptions().colors[9]
      },

      {
        name: 'Female',
        data: this.femaleBrgyCount2,
        color: Highcharts.getOptions().colors[8]

      },
    ]
  }

  public stack: any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Population pyramid for Germany, 2018'
    },
    subtitle: {
      text: 'Source: <a href="http://populationpyramid.net/germany/2018/">Population Pyramids of the World from 1950 to 2100</a>'
    },
    accessibility: {
      point: {
        descriptionFormatter: function (point) {
          var index = point.index + 1,
            category = point.category,
            val = Math.abs(point.y),
            series = point.series.name;

          return index + ', Age ' + category + ', ' + val + '%. ' + series + '.';
        }
      }
    },
    xAxis: [{
      categories: this.brgyList,
      reversed: false,
      labels: {
        step: 1
      },
      accessibility: {
        description: 'Age (male)'
      }
    }, { // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: this.brgyList,
      linkedTo: 0,
      labels: {
        step: 1
      },
      accessibility: {
        description: 'Age (female)'
      }
    }],
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function () {
          return Math.abs(this.value) + '%';
        }
      },
      accessibility: {
        description: 'Percentage population',
        rangeDescription: 'Range: 0 to 5%'
      }
    },

    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
          'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
      }
    },
    series: [{
      name: 'Male',
      data: this.maleBrgyCount,
    }, {
      name: 'Female',
      data: this.femaleBrgyCount
    }]
  }
  getMonth(selectedMonth) {
    console.log(selectedMonth, this.months.indexOf(selectedMonth));
    // this.maleCountList.length = 0;
    // this.total.length = 0;
    // this.average.length = 0;
    // this.femaleCountList.length = 0;
    this.http.get('https://bakunapp.online/api/reports').subscribe(
      data => {
        let list = [] as any;
        list.push(data['data']);
        console.log(list);

        list.forEach(res => {

          const mapped = Object.keys(res).map(key => ({
            type: key,
            value: res[key]
          }));

          for (let x = 0; x < mapped.length; x++) {
            let key = mapped[x].type;

            console.log(mapped[x].value['Month'], this.selectedMonth);
            if (mapped[x].value['Year'] == this.currentYear && mapped[x].value['Month'] == this.selectedMonth) {


              // this.options.length = 0;

              this.antigenNameList.push(list['AntigenName']);
              this.maleCountList.push(list['MaleCount']);
              console.log(list['MaleCount']);
              this.femaleCountList.push(list['FemaleCount']);

              let total = (list['MaleCount'] + list['FemaleCount']);
              this.total.push(total);

              let ave = (list['MaleCount'] + list['FemaleCount']) / 2;
              this.average.push(ave);


            }
            else {
              this.antigenNameList.push(list['AntigenName']);

              this.maleCountList.length = 0;
              this.total.length = 0;
              this.average.length = 0;
              this.femaleCountList.length = 0;
              this.options.length = 0;



            }
            console.log(list)
          }

        })



        const chart1 = Highcharts.chart('graph-vaccineCoverage', this.options);

      })

  }

  ngOnInit() {
    this.http.get('https://bakunapp.online/api/reports').subscribe(
      data => {
        data["data"].forEach(list => {

          this.antigenNameList.push(list['AntigenName']);
          this.maleCountList.push(list['MaleCount']);
          this.femaleCountList.push(list['FemaleCount']);

          let total = (list['MaleCount'] + list['FemaleCount']);
          this.total.push(total);

          let ave = (list['MaleCount'] + list['FemaleCount']) / 2;
          this.average.push(ave);
        });

        this.chart1 = Highcharts.chart('graph-vaccineCoverage', this.options);
      });
    /*
        this.http.get('https://bakunapp.online/api/reportsBarangay').subscribe(
          data => {
            data["data"].forEach(list => {

              this.brgyList.push(list['BarangayName']);
              this.maleBrgyCount.push(-1*(list['MaleCount']));
              this.femaleBrgyCount.push(list['FemaleCount']);

            });
            console.log(this.brgyList);
            console.log(this.maleBrgyCount);
            console.log(this.femaleBrgyCount);

            // Highcharts.chart('container-quota3', this.options3);
            Highcharts.chart('container-quota4', this.stack);


          });
    */
    this.http.get('https://bakunapp.online/api/reportsBarangay').subscribe(
      data => {
        data["data"].forEach(list => {

          this.brgyList2.push(list['BarangayName']);
          this.maleBrgyCount2.push(list['MaleCount']);
          this.femaleBrgyCount2.push(list['FemaleCount']);

        });

        this.chart2 = Highcharts.chart('container-quota3', this.options3);

      });



  }

}
