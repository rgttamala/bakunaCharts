import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  api_url = 'https://bakunapp.online/api/reports';
  // 'https://newsapi.org/v2/sources?language=en&apiKey='+'4ab7ad9bd5bc470d88e9c2f22a827f1e';


  constructor(private http: HttpClient) {
  }

  public handleError(errorResponse: HttpErrorResponse) {
    let errmsg = '';
    if (errorResponse.error instanceof ErrorEvent) {
      errmsg = `Error: ${errorResponse.error.message}`
      console.error('Client Side error: ', errorResponse.error.message);
    } else {
      var errStr = JSON.stringify(errorResponse.error);
      //errmsg = 'Error:' + errStr;
      JSON.parse(errStr, (key, value) => {
        if (typeof value === 'string') {
          return value;
        }
        return errmsg = value;
      });
      console.error('Server Side Error: ', errorResponse);
    }
    //window.alert(errmsg);
    return throwError(errmsg);
    //return throwError('There is a problem with the service. We are notified and working for it. Please try again.');
  }

  getAllAntigen(){
    return this.http.get(this.api_url).pipe(catchError(this.handleError));
  }



}
