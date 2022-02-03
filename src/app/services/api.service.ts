import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path= 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  postRequest(endPoint: string, data: any, params: any): Observable<any> {
    //add the headers of the request
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      }),
      //if there is a param like id to add in the request
      params: params
    };
    return this.http.post(this.path + endPoint, data, httpOptions);
  }

  getRequest(endPoint: string, params: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
      params: params
    };
    return this.http.get(this.path + endPoint, httpOptions);
  }


}
