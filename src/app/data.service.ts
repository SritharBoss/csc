import { Injectable } from '@angular/core';

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
  constructor() { }
}
