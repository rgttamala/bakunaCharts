(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-brgy-reports/all-brgy-reports.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/all-brgy-reports/all-brgy-reports.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1icmd5LXJlcG9ydHMvYWxsLWJyZ3ktcmVwb3J0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/all-brgy-reports/all-brgy-reports.component.html":
/*!******************************************************************!*\
  !*** ./src/app/all-brgy-reports/all-brgy-reports.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"container-quota2\"></div>\n<div class=\"spacer\"></div> -->\n<div id=\"container-quota\"></div>\n<div class=\"spacer\"></div>\n<div id=\"container-quota3\"></div>\n<!-- <div class=\"spacer\"></div>\n<div id=\"container-quota4\"></div> -->\n\n\n"

/***/ }),

/***/ "./src/app/all-brgy-reports/all-brgy-reports.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/all-brgy-reports/all-brgy-reports.component.ts ***!
  \****************************************************************/
/*! exports provided: AllBrgyReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBrgyReportsComponent", function() { return AllBrgyReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var Boost = __webpack_require__(/*! highcharts/modules/boost */ "./node_modules/highcharts/modules/boost.js");
var noData = __webpack_require__(/*! highcharts/modules/no-data-to-display */ "./node_modules/highcharts/modules/no-data-to-display.js");
var More = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
Boost(highcharts__WEBPACK_IMPORTED_MODULE_2__);
noData(highcharts__WEBPACK_IMPORTED_MODULE_2__);
More(highcharts__WEBPACK_IMPORTED_MODULE_2__);
noData(highcharts__WEBPACK_IMPORTED_MODULE_2__);
var AllBrgyReportsComponent = /** @class */ (function () {
    function AllBrgyReportsComponent(http) {
        this.http = http;
        this.maleCountList = []; //[7.0, 6, 5, 5, 14, 21, 25, 15, 13, 10, 9, 6];
        this.femaleCountList = []; //[9, 4, 7, 8, 11, 15, 17, 16, 14, 10, 6, 4];
        this.average = []; //[9, 4, 7, 8, 11, 15, 17, 16, 14, 10, 6, 4];
        this.total = []; //[9, 4, 7, 8, 11, 15, 17, 16, 14, 10, 6, 4];
        this.antigenNameList = []; //["BCG", "Hepa B", "Pentavalent", "PCV", "OPV", "IPV", "MCV 1", "MCV 2", "Vitamin A", "Deworming"];
        this.reportSubtitle = 'Source: City Health (District 1)';
        this.vaccineLabel = 'Total no. of vaccines given';
        this.MonthlyReportTitle = 'Vaccine Coverage (Monthly)';
        this.maleBrgyCount = [];
        this.femaleBrgyCount = [];
        this.brgyList = [];
        this.maleBrgyCount2 = [];
        this.femaleBrgyCount2 = [];
        this.brgyList2 = [];
        this.options = {
            title: {
                text: this.MonthlyReportTitle
            },
            subtitle: {
                text: this.reportSubtitle
            },
            xAxis: {
                categories: this.antigenNameList,
            },
            labels: {
                items: [{
                        // html: this.vaccineLabel,
                        style: {
                            left: '50px',
                            top: '18px',
                            color: ( // theme
                            highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].title.style &&
                                highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].title.style.color) || 'black'
                        }
                    }]
            },
            series: [
                {
                    type: 'column',
                    name: 'Male',
                    data: this.maleCountList,
                    color: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[9]
                }, {
                    type: 'column',
                    name: 'Female',
                    data: this.femaleCountList,
                    color: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[8]
                },
                {
                    type: 'spline',
                    name: 'Average',
                    data: this.average,
                    marker: {
                        lineWidth: 2,
                        lineColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[3],
                        fillColor: 'white'
                    }
                },
            ]
        };
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
        this.options3 = {
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
                categories: this.brgyList2,
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
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].legend.backgroundColor || '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'Male',
                    data: this.maleBrgyCount2,
                    color: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[9]
                },
                {
                    name: 'Female',
                    data: this.femaleBrgyCount2,
                    color: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[8]
                },
            ]
        };
        this.stack = {
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
                        var index = point.index + 1, category = point.category, val = Math.abs(point.y), series = point.series.name;
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
                }, {
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
                        'Population: ' + highcharts__WEBPACK_IMPORTED_MODULE_2__["numberFormat"](Math.abs(this.point.y), 1) + '%';
                }
            },
            series: [{
                    name: 'Male',
                    data: this.maleBrgyCount,
                }, {
                    name: 'Female',
                    data: this.femaleBrgyCount
                }]
        };
    }
    AllBrgyReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://bakunapp.online/api/reports').subscribe(function (data) {
            data["data"].forEach(function (list) {
                _this.antigenNameList.push(list['AntigenName']);
                _this.maleCountList.push(list['MaleCount']);
                _this.femaleCountList.push(list['FemaleCount']);
                var total = (list['MaleCount'] + list['FemaleCount']);
                _this.total.push(total);
                var ave = (list['MaleCount'] + list['FemaleCount']) / 2;
                _this.average.push(ave);
            });
            highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('container-quota', _this.options);
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
        this.http.get('https://bakunapp.online/api/reportsBarangay').subscribe(function (data) {
            data["data"].forEach(function (list) {
                _this.brgyList2.push(list['BarangayName']);
                _this.maleBrgyCount2.push(list['MaleCount']);
                _this.femaleBrgyCount2.push(list['FemaleCount']);
            });
            highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('container-quota3', _this.options3);
        });
    };
    AllBrgyReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'all-brgy-reports',
            template: __webpack_require__(/*! ./all-brgy-reports.component.html */ "./src/app/all-brgy-reports/all-brgy-reports.component.html"),
            styles: [__webpack_require__(/*! ./all-brgy-reports.component.css */ "./src/app/all-brgy-reports/all-brgy-reports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AllBrgyReportsComponent);
    return AllBrgyReportsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-head{\n  background-color: cornflowerblue;\n  text-align: center;\n}\n.highcharts-figure, .highcharts-data-table table {\n  min-width: 360px; \n  max-width: 800px;\n  margin: 1em auto;\n}\n.highcharts-data-table table {\nfont-family: Verdana, sans-serif;\nborder-collapse: collapse;\nborder: 1px solid #EBEBEB;\nmargin: 10px auto;\ntext-align: center;\nwidth: 100%;\nmax-width: 500px;\n}\n.highcharts-data-table caption {\n  padding: 1em 0;\n  font-size: 1.2em;\n  color: #555;\n}\n.highcharts-data-table th {\nfont-weight: 600;\n  padding: 0.5em;\n}\n.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {\n  padding: 0.5em;\n}\n.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {\n  background: #f8f8f8;\n}\n.highcharts-data-table tr:hover {\n  background: #f1f7ff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0FBQ0EsZ0JBQWdCO0VBQ2QsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWhlYWR7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGlnaGNoYXJ0cy1maWd1cmUsIC5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdGFibGUge1xuICBtaW4td2lkdGg6IDM2MHB4OyBcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbn1cblxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0YWJsZSB7XG5mb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcbmJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5ib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xubWFyZ2luOiAxMHB4IGF1dG87XG50ZXh0LWFsaWduOiBjZW50ZXI7XG53aWR0aDogMTAwJTtcbm1heC13aWR0aDogNTAwcHg7XG59XG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIGNhcHRpb24ge1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICM1NTU7XG59XG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRoIHtcbmZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0ZCwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0aCwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSBjYXB0aW9uIHtcbiAgcGFkZGluZzogMC41ZW07XG59XG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRoZWFkIHRyLCAuaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YxZjdmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-head\" style=\"text-align:center\">\n  \n  <brgy-report></brgy-report>\n    <div class=\"spacer\"></div>\n  <all-brgy-reports></all-brgy-reports>\n\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bakunapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bakuna-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _brgy_report_brgy_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brgy-report/brgy-report.component */ "./src/app/brgy-report/brgy-report.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/report.service */ "./src/app/services/report.service.ts");
/* harmony import */ var _all_brgy_reports_all_brgy_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./all-brgy-reports/all-brgy-reports.component */ "./src/app/all-brgy-reports/all-brgy-reports.component.ts");




// import { ChartsModule } from 'ng2-charts';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _brgy_report_brgy_report_component__WEBPACK_IMPORTED_MODULE_6__["BrgyReportComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"], _all_brgy_reports_all_brgy_reports_component__WEBPACK_IMPORTED_MODULE_10__["AllBrgyReportsComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            providers: [_services_report_service__WEBPACK_IMPORTED_MODULE_9__["ReportService"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/brgy-report/brgy-report.component.css":
/*!*******************************************************!*\
  !*** ./src/app/brgy-report/brgy-report.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZ3ktcmVwb3J0L2JyZ3ktcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/brgy-report/brgy-report.component.html":
/*!********************************************************!*\
  !*** ./src/app/brgy-report/brgy-report.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container-reports4\"></div>\n<div class=\"spacer\"></div>\n<div id=\"container-reports\"></div>\n<div class=\"spacer\"></div>\n<div id=\"container-reports1\"></div>\n<div class=\"spacer\"></div>\n<div id=\"container-reports2\"></div>\n<div class=\"spacer\"></div>\n<div id=\"container-reports3\"></div>"

/***/ }),

/***/ "./src/app/brgy-report/brgy-report.component.ts":
/*!******************************************************!*\
  !*** ./src/app/brgy-report/brgy-report.component.ts ***!
  \******************************************************/
/*! exports provided: BrgyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrgyReportComponent", function() { return BrgyReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/report.service */ "./src/app/services/report.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




// import { Data } from '../model/reports.model';
// import { interval, Subscription } from 'rxjs';

var Boost = __webpack_require__(/*! highcharts/modules/boost */ "./node_modules/highcharts/modules/boost.js");
var noData = __webpack_require__(/*! highcharts/modules/no-data-to-display */ "./node_modules/highcharts/modules/no-data-to-display.js");
var More = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
Boost(highcharts__WEBPACK_IMPORTED_MODULE_2__);
noData(highcharts__WEBPACK_IMPORTED_MODULE_2__);
More(highcharts__WEBPACK_IMPORTED_MODULE_2__);
noData(highcharts__WEBPACK_IMPORTED_MODULE_2__);
var BrgyReportComponent = /** @class */ (function () {
    function BrgyReportComponent(reportsAPI, http) {
        this.reportsAPI = reportsAPI;
        this.http = http;
        this.Pangi = [3, 1, 11, 5, 21, 10, 14, 16, 20, 5, 3, 7];
        this.Aplaya = [4, 6, 10, 15, 5, 6, 7, 10, 13, 17, 11, 9];
        this.Crossing = [1, 2, 5, 14, 16, 20, 5, 3, 7, 5, 12, 11];
        this.aplayaCount = [];
        this.pangiCount = [];
        this.crossingCount = [];
        this.allCount = [];
        this.calculatedMonthly = [];
        this.calculatedAll = [];
        this.total = [];
        this.monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.antigenNameList = []; //["BCG", "Hepa B", "Pentavalent", "PCV", "OPV", "IPV", "MCV 1", "MCV 2", "Vitamin A", "Deworming"];
        this.reportType = 'column'; //'bar';
        this.brgyReportTitle = 'Chilhood Immunization (Monthly)';
        this.calculatedReportTitle = 'Population Growth Rate (Monthly)';
        this.subtitleCityHealth = 'Source: Davao City Health (District 1)';
        // allReportTitle = 'Population Growth Rate (Monthly All)';
        //reportSubtitle = 'Source: City Health (Brgy. '+this.brgyName+')';
        this.xAxisTitle = 'Number of children';
        this.aplaya = {
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
                    name: 'Children',
                    data: this.aplayaCount,
                },
            ],
            tooltip: {
                // valueSuffix: ' children',
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>'
                //Total: {point.stackTotal}'
            }
        };
        this.pangi = {
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
                    name: 'All',
                    data: this.pangiCount,
                },
            ],
            tooltip: {
                // valueSuffix: ' children',
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>'
                //Total: {point.stackTotal}'
            }
        };
        this.crossing = {
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
                    name: 'All',
                    data: this.crossingCount
                },
            ],
            tooltip: {
                // valueSuffix: ' children',
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>'
                //Total: {point.stackTotal}'
            }
        };
        this.calculatedReport = {
            chart: {
                type: this.reportType
            },
            title: {
                text: this.calculatedReportTitle
            },
            subtitle: {
                text: this.subtitleCityHealth //'Source: City Health (Disctrict 1)'
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
                    name: 'All',
                    data: this.calculatedMonthly,
                    color: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[1]
                },
            ],
            tooltip: {
                // valueSuffix: ' children',
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>'
                //Total: {point.stackTotal}'
            }
        };
        this.allReport = {
            chart: {
                type: this.reportType
            },
            title: {
                text: this.brgyReportTitle
            },
            subtitle: {
                text: this.subtitleCityHealth //'Source: City Health (District 1)'
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
                    name: 'All',
                    data: this.allCount,
                    color: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[1]
                },
            ],
            tooltip: {
                // valueSuffix: ' children',
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>'
                //Total: {point.stackTotal}'
            }
        };
    }
    BrgyReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://bakunapp.online/api/reportsMonthly').subscribe(function (data) {
            // console.log(data);
            var list = [];
            list.push(data['data']);
            list.forEach(function (res) {
                var mapped = Object.keys(res).map(function (key) { return ({
                    type: key,
                    value: res[key]
                }); });
                // console.log(mapped);
                // console.log(mapped.length);
                for (var x = 0; x < mapped.length; x++) {
                    // console.log(mapped[x].type);
                    var key = mapped[x].type;
                    if (key == 'total') {
                        console.log(key);
                        _this.total = mapped[x].value;
                        console.log(_this.total);
                    }
                    else if (key == 'calculated') {
                        console.log(key);
                        _this.calculatedAll = mapped[x].value;
                        console.log(_this.calculatedAll);
                    }
                    else {
                        _this.aplayaCount.push(mapped[x].value['Matina Aplaya']);
                        // console.log(this.aplayaCount);
                        _this.crossingCount.push(mapped[x].value['Matina Crossing']);
                        // console.log(this.crossingCount);
                        _this.pangiCount.push(mapped[x].value['Matina Pangi']);
                        // console.log(this.pangiCount);
                        _this.calculatedMonthly.push(mapped[x].value['calculated']);
                        _this.allCount.push(mapped[x].value['all']);
                        // console.log(this.allCount);
                    }
                }
                // console.log(this.aplayaCount);
                // console.log(this.crossingCount);
                // console.log(this.pangiCount);
                // console.log(this.allCount);
                highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('container-reports', _this.pangi);
                highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('container-reports1', _this.aplaya);
                highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('container-reports2', _this.crossing);
                highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('container-reports3', _this.calculatedReport);
                highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('container-reports4', _this.allReport);
                //Highcharts.chart('container-reports4', this.populationGrowth);
                //  console.log(Object.keys(res));
                //  console.log(Object.keys(res['1']));
                //  console.log((res['1']));
            });
        });
    };
    BrgyReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'brgy-report',
            template: __webpack_require__(/*! ./brgy-report.component.html */ "./src/app/brgy-report/brgy-report.component.html"),
            styles: [__webpack_require__(/*! ./brgy-report.component.css */ "./src/app/brgy-report/brgy-report.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], BrgyReportComponent);
    return BrgyReportComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor=\"let item of antigenList\"> \n    {{item.AntigenName}}\n    {{item.MaleCount}}\n    {{item.FemaleCount}}\n    {{item.Total}}\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/report.service */ "./src/app/services/report.service.ts");



var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(reportsAPI) {
        this.reportsAPI = reportsAPI;
        this.title = 'Bakuna Monthly Reports';
    }
    ReportsComponent.prototype.ngOnInit = function () {
        //load reports
        this.getReports();
    };
    ReportsComponent.prototype.getReports = function () {
        var _this = this;
        this.reportsAPI.getAllAntigen().subscribe(function (data) { return _this.antigenList = data['data']; });
    };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cio-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/services/report.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/report.service.ts ***!
  \********************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ReportService = /** @class */ (function () {
    // 'https://newsapi.org/v2/sources?language=en&apiKey='+'4ab7ad9bd5bc470d88e9c2f22a827f1e';
    function ReportService(http) {
        this.http = http;
        this.api_url = 'https://bakunapp.online/api/reports';
    }
    ReportService.prototype.handleError = function (errorResponse) {
        var errmsg = '';
        if (errorResponse.error instanceof ErrorEvent) {
            errmsg = "Error: " + errorResponse.error.message;
            console.error('Client Side error: ', errorResponse.error.message);
        }
        else {
            var errStr = JSON.stringify(errorResponse.error);
            //errmsg = 'Error:' + errStr;
            JSON.parse(errStr, function (key, value) {
                if (typeof value === 'string') {
                    return value;
                }
                return errmsg = value;
            });
            console.error('Server Side Error: ', errorResponse);
        }
        //window.alert(errmsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errmsg);
        //return throwError('There is a problem with the service. We are notified and working for it. Please try again.');
    };
    ReportService.prototype.getAllAntigen = function () {
        return this.http.get(this.api_url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/onyotzki/Sites/bakuna/public/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map