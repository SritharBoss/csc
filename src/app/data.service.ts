import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private loader: boolean=false;

  setLoader(value: boolean) {
    this.loader = value;
  }

  getLoader(): boolean {
    return this.loader;
  }
  constructor(private http: HttpClient) {}

  downloadExcelFile(apiUrl:string) {
    return this.http.get(apiUrl, { responseType: 'blob' });
  }
}
