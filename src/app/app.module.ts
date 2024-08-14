import { NgModule,Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

@Pipe({
  name: 'indianCurrency'
})
export class IndianCurrencyPipe implements PipeTransform {

  transform(value: number | string): string {
    let stringValue = value.toString();
    let afterPoint = '';
    let prefix=stringValue.startsWith('-')?'-':''
    if(stringValue.startsWith('-') && stringValue.length>1){
      stringValue=stringValue.substring(1,stringValue.length)
    }
    
    if (stringValue.indexOf('.') > 0) {
      afterPoint = stringValue.substring(stringValue.indexOf('.'), stringValue.length);
      stringValue = stringValue.substring(0, stringValue.indexOf('.'));
    }

    let lastThree = stringValue.substring(stringValue.length - 3);
    let otherNumbers = stringValue.substring(0, stringValue.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }

    let result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + afterPoint;
    return ' '+prefix+result;
  }
}



@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    IndianCurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}

