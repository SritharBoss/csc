import { DatePipe } from '@angular/common';
import { Component, AfterViewInit, OnInit} from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements AfterViewInit, OnInit {
  
  constructor(public datepipe: DatePipe,public dataService:DataService) {}

  isOnline=true

  //host="https://localhost:3000"
  host="https://csckkd.ddns.net:3000"

  defaultData={"date": new Date(), "accounts": [{ "name": "CASH IN HAND", "id": "accounts-1", "amount": 0}, { "name": "PVL CUB", "id": "accounts-2", "amount": 0}, { "name": "PVL SBI CR", "id": "accounts-3", "amount": 0}, { "name": "PVL SBI SB", "id": "accounts-4", "amount": 0}, { "name": "BHANU UBI", "id": "accounts-5", "amount": 0}, { "name": "DIGIPAY", "id": "accounts-6", "amount": 0}, { "name": "RABIPAY", "id": "accounts-7", "amount": 0}, { "name": "BHANU SBI OD", "id": "accounts-8", "amount": 0}, { "name": "BHANU SBI", "id": "accounts-9", "amount": 0}, { "name": "CSC DIGITAL SEVA", "id": "accounts-10", "amount": 0}, { "name": "SMART SHOP", "id": "accounts-11", "amount": 0}, { "name": "I-NET", "id": "accounts-12", "amount": 0}, { "name": "Google Business", "id": "accounts-13", "amount": 0}], "services": [{ "name": "SUNDIRECT", "id": "serv-1", "amount": 0}, { "name": "A/T DIGITAL TV", "id": "serv-2", "amount": 0}, { "name": "Tata sky", "id": "serv-3", "amount": 0}, { "name": "A/T MOBILE", "id": "serv-4", "amount": 0}, { "name": "VODAFONE 1+2", "id": "serv-5", "amount": 0}, { "name": "JIO 1+2", "id": "serv-6", "amount": 0}, { "name": "BSNL", "id": "serv-7", "amount": 0}, { "name": "V/C TV", "id": "serv-8", "amount": 0}, { "name": "Bismi PAN", "id": "serv-9", "amount": 0}, { "name": "Star Commu.", "id": "serv-10", "amount": 0}], "custBalance": [], "cashBal": [{ "id": "cash_1", "denom": 2000, "value": 0 }, { "id": "cash_2", "denom": 500, "value": 0 }, { "id": "cash_3", "denom": 200, "value": 0 }, { "id": "cash_4", "denom": 100, "value": 0 }, { "id": "cash_5", "denom": 50, "value": 0 }, { "id": "cash_6", "denom": 20, "value": 0 }, { "id": "cash_7", "denom": 10, "value": 0 }, { "id": "cash_8", "denom": 5, "value": 0 }], "todayExpenses": [], "yestGT": 0, "yestDiff": 0, "currentGT":0, "currentDiff":0 };
  data: JsonSchema = { "date": new Date(), "accounts": [{ "name": "CASH IN HAND", "id": "accounts-1", "amount": 0}, { "name": "PVL CUB", "id": "accounts-2", "amount": 0}, { "name": "PVL SBI CR", "id": "accounts-3", "amount": 0}, { "name": "PVL SBI SB", "id": "accounts-4", "amount": 0}, { "name": "BHANU UBI", "id": "accounts-5", "amount": 0}, { "name": "DIGIPAY", "id": "accounts-6", "amount": 0}, { "name": "RABIPAY", "id": "accounts-7", "amount": 0}, { "name": "BHANU SBI OD", "id": "accounts-8", "amount": 0}, { "name": "BHANU SBI", "id": "accounts-9", "amount": 0}, { "name": "CSC DIGITAL SEVA", "id": "accounts-10", "amount": 0}, { "name": "SMART SHOP", "id": "accounts-11", "amount": 0}, { "name": "I-NET", "id": "accounts-12", "amount": 0}, { "name": "Google Business", "id": "accounts-13", "amount": 0}], "services": [{ "name": "SUNDIRECT", "id": "serv-1", "amount": 0}, { "name": "A/T DIGITAL TV", "id": "serv-2", "amount": 0}, { "name": "Tata sky", "id": "serv-3", "amount": 0}, { "name": "A/T MOBILE", "id": "serv-4", "amount": 0}, { "name": "VODAFONE 1+2", "id": "serv-5", "amount": 0}, { "name": "JIO 1+2", "id": "serv-6", "amount": 0}, { "name": "BSNL", "id": "serv-7", "amount": 0}, { "name": "V/C TV", "id": "serv-8", "amount": 0}, { "name": "Bismi PAN", "id": "serv-9", "amount": 0}, { "name": "Star Commu.", "id": "serv-10", "amount": 0}], "custBalance": [], "cashBal": [{ "id": "cash_1", "denom": 2000, "value": 0 }, { "id": "cash_2", "denom": 500, "value": 0 }, { "id": "cash_3", "denom": 200, "value": 0 }, { "id": "cash_4", "denom": 100, "value": 0 }, { "id": "cash_5", "denom": 50, "value": 0 }, { "id": "cash_6", "denom": 20, "value": 0 }, { "id": "cash_7", "denom": 10, "value": 0 }, { "id": "cash_8", "denom": 5, "value": 0 }], "todayExpenses": [], "yestGT": 0, "yestDiff": 0, "currentGT":0, "currentDiff":0 };
  accounts: Accounts[] = this.data.accounts;
  services: Services[] = this.data.services;
  crPeoples: CustBalance[] = this.data.custBalance.filter((value: any) => { return value.type == 'c' });
  drPeoples: CustBalance[] = this.data.custBalance.filter((value: any) => { return value.type == 'd' });
  cashBal: CashBal[] = this.data.cashBal;
  expenses: Expenses[] = this.data.todayExpenses;
  date: Date = new Date();
  //only for Comparing purposes
  respData:JsonSchema={"date": new Date(), "accounts": [{ "name": "CASH IN HAND", "id": "accounts-1", "amount": 0}, { "name": "PVL CUB", "id": "accounts-2", "amount": 0}, { "name": "PVL SBI CR", "id": "accounts-3", "amount": 0}, { "name": "PVL SBI SB", "id": "accounts-4", "amount": 0}, { "name": "BHANU UBI", "id": "accounts-5", "amount": 0}, { "name": "DIGIPAY", "id": "accounts-6", "amount": 0}, { "name": "RABIPAY", "id": "accounts-7", "amount": 0}, { "name": "BHANU SBI OD", "id": "accounts-8", "amount": 0}, { "name": "BHANU SBI", "id": "accounts-9", "amount": 0}, { "name": "CSC DIGITAL SEVA", "id": "accounts-10", "amount": 0}, { "name": "SMART SHOP", "id": "accounts-11", "amount": 0}, { "name": "I-NET", "id": "accounts-12", "amount": 0}, { "name": "Google Business", "id": "accounts-13", "amount": 0}], "services": [{ "name": "SUNDIRECT", "id": "serv-1", "amount": 0}, { "name": "A/T DIGITAL TV", "id": "serv-2", "amount": 0}, { "name": "Tata sky", "id": "serv-3", "amount": 0}, { "name": "A/T MOBILE", "id": "serv-4", "amount": 0}, { "name": "VODAFONE 1+2", "id": "serv-5", "amount": 0}, { "name": "JIO 1+2", "id": "serv-6", "amount": 0}, { "name": "BSNL", "id": "serv-7", "amount": 0}, { "name": "V/C TV", "id": "serv-8", "amount": 0}, { "name": "Bismi PAN", "id": "serv-9", "amount": 0}, { "name": "Star Commu.", "id": "serv-10", "amount": 0}], "custBalance": [], "cashBal": [{ "id": "cash_1", "denom": 2000, "value": 0 }, { "id": "cash_2", "denom": 500, "value": 0 }, { "id": "cash_3", "denom": 200, "value": 0 }, { "id": "cash_4", "denom": 100, "value": 0 }, { "id": "cash_5", "denom": 50, "value": 0 }, { "id": "cash_6", "denom": 20, "value": 0 }, { "id": "cash_7", "denom": 10, "value": 0 }, { "id": "cash_8", "denom": 5, "value": 0 }], "todayExpenses": [], "yestGT": 0, "yestDiff": 0, "currentGT":0, "currentDiff":0 };

  jsonFile: any;

  currentAccountSum = 0;
  currentServicesSum = 0;
  currentCrBal = 0;
  currentDebBal = 0;
  currentDenom = 0;
  currentExpenses = 0;

  currentGT: number = 0;
  yestGT: number = 0

  currentDiff = 0;
  yestDiff = 0;

  prev="";
  tomorrow="";

  ngOnInit(): void {

    this.dataService.setLoader(true)

    if(localStorage.getItem("date")!=null){
      this.date = new Date(localStorage.getItem("date") || "");
    }

    if(localStorage.getItem("host")!=null){
      this.host = localStorage.getItem("host") || ""
    }
    
    let resp:Response=this.makeHTTPRequest(this.host+"/api/getFile?date="+this.getDateString(this.date),'GET');
    if(resp.success){
      this.prev=resp.yestFile
      this.tomorrow=resp.tomorrorwFile
      this.populateData(JSON.stringify(resp.data))
    }else{
      this.data=this.defaultData;
      console.error("Get call failed.")
    }
    setTimeout(()=>{
      this.dataService.setLoader(false)
    },1000)
  }

  
  fileChanged(e: any) {
    this.jsonFile = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsText(this.jsonFile);

    fileReader.onloadend = (e) => {
      this.populateData(fileReader.result);
    }
  }
  

  populateData(result: any) {
    try {
      this.data = (JSON.parse(result) as JsonSchema);
      this.respData = (JSON.parse(result) as JsonSchema)
    } catch (error) {
      alert('File Error')
      console.error(error)
    }

    this.accounts = this.data.accounts;
    this.services = this.data.services;
    this.crPeoples = this.data.custBalance.filter((value: any) => { return value.type == 'c' });
    this.drPeoples = this.data.custBalance.filter((value: any) => { return value.type == 'd' });
    this.cashBal = this.data.cashBal;
    this.expenses = this.data.todayExpenses;
    this.date=new Date(this.data.date)

    this.data.cashBal.forEach(element=>{this.currentDenom=+(element.value*element.denom)})
    this.data.accounts.forEach(element=>{this.currentAccountSum=+element.amount})
    this.data.services.forEach(element=>{this.currentServicesSum=+element.amount})
    this.data.custBalance.filter((value: any) => { return value.type == 'c' }).forEach(element=>{this.currentCrBal=+element.amount})
    this.data.custBalance.filter((value: any) => { return value.type == 'd' }).forEach(element=>{this.currentDebBal=+element.amount})
    this.data.todayExpenses.forEach(element=>{this.currentExpenses=+element.amount})
    
    this.currentGT=this.data.currentGT
    this.yestGT=this.data.yestGT

    this.currentDiff = this.data.currentDiff;
    this.yestDiff = this.data.yestDiff

    setTimeout(() => {this.updateHeaders(); }, 500);

  }

  addUser(mode: string) {
    let name = prompt('Please Enter the Name');
    if (name != null && name != "") {
      if (mode == 'cr') {
        if(this.crPeoples.filter(a=>a.custName==name).length==0){
          this.crPeoples.push({ "custName": name, "type": "c", "amount": 0 })
        }else{
          alert("Customer already Exists.");
          (document.getElementById("id_" + name+"_c") as HTMLInputElement).focus();
        }
      } else if (mode == 'dr') {
        if(this.drPeoples.filter(a=>a.custName==name).length==0){
          this.drPeoples.push({ "custName": name, "type": "d", "amount": 0 })
        }else{
          alert("Customer already Exists.");
          (document.getElementById("id_" + name+"_d") as HTMLInputElement).focus();
        }
      } else if (mode == 'ex') {
        if(this.expenses.filter(a=>a.name==name).length==0){
          this.expenses.push({ "name": name, "notes": "", "type": "d", "amount": 0 })
        }else{
          alert("Expense already Exists.");
          (document.getElementById("id_" + name+"_ex") as HTMLInputElement).focus();
        }
      } else if (mode == 'acc') {
        if(this.accounts.filter(a=>a.name==name).length==0){
          this.accounts.push({ "name": name, "id": name+"_", "amount": 0 })
        }else{
          alert("Account already Exists.")
        }
      } else if (mode == 'ser') {
        if(this.services.filter(a=>a.name==name).length==0){
          this.services.push({ "name": name, "id": name+"_", "amount": 0 })
        }else{
          alert("Service already Exists.")
        }
      }
    }
  }

  deleteRow(name: string, mode: string) {
    var confirmation:boolean=confirm("Confirm Delete : "+name);
    if(confirmation){
      if (mode == 'cr') {
        this.crPeoples = this.crPeoples.filter((value) => { return value.custName != name && value.type == 'c' })
      } else if (mode == 'dr') {
        this.drPeoples = this.drPeoples.filter((value) => { return value.custName != name && value.type == 'd' })
      } else if (mode == 'ex') {
        this.expenses = this.expenses.filter((value) => { return value.name != name })
      } else if (mode == 'acc') {
        this.accounts = this.accounts.filter((value) => { return value.name != name })
      } else if (mode == 'ser') {
        this.services = this.services.filter((value) => { return value.name != name })
      }
    }
  }

  onChange(event: any, module: string) {
    
    if (module == 'accounts') {
      this.currentAccountSum = 0;
      this.accounts.forEach(element => {
        let val: number = +(document.getElementById("id_" + element.id) as HTMLInputElement).value;
        element.amount = val;
        this.currentAccountSum = this.currentAccountSum + val;
      });
    } else if (module == 'services') {
      this.currentServicesSum = 0;
      this.services.forEach(element => {
        let val: number = +(document.getElementById("id_" + element.id) as HTMLInputElement).value;
        element.amount = val;
        this.currentServicesSum = this.currentServicesSum + val;
      });
    } else if (module == 'cust-c') {
      this.currentCrBal = 0;
      this.crPeoples.forEach(element => {
        let val = +(document.getElementById("id_" + element.custName + "_" + element.type) as HTMLInputElement).value;
        element.amount = val;
        this.currentCrBal = this.currentCrBal + val;
      });
    } else if (module == 'cust-d') {
      this.currentDebBal = 0;
      (this.drPeoples as CustBalance[]).forEach(e => {
        let val = +(document.getElementById("id_" + e.custName + "_" + e.type) as HTMLInputElement).value;
        e.amount = val
        this.currentDebBal = this.currentDebBal + val;
      });
    } else if (module == 'denom') {
      this.currentDenom = 0;
      this.cashBal.forEach(element => {
        let val = +(document.getElementById("id_" + element.id) as HTMLInputElement).value;
        element.value = val;
        this.currentDenom = this.currentDenom + val * element.denom;
      });

      (document.getElementById("id_accounts-1") as HTMLInputElement).value = this.currentDenom.toString();
      this.onChange(event, 'accounts');

    } else if (module == 'expense') {
      this.currentExpenses = 0;
      this.expenses.forEach(element => {
        let val = +(document.getElementById("id_" + element.name + "_ex") as HTMLInputElement).value;
        element.amount = val;
        this.currentExpenses = this.currentExpenses + val;
      });
    }
    this.updateSubHeadersData();
    //this.saveJson();
  }

  updateSubHeadersData() {
    this.currentGT = this.currentAccountSum + this.currentServicesSum + this.currentCrBal - this.currentDebBal;
    this.currentDiff = this.currentGT - this.yestGT + this.currentExpenses;
  }

  updateHeaders() {
    this.onChange('', 'accounts');
    this.onChange('', 'services');
    this.onChange('', 'cust-c');
    this.onChange('', 'cust-d');
    this.onChange('', 'denom');
    this.onChange('', 'expense');
    console.log('On Change Call for all components')
    this.saveJson();
  }

  saveData(){
    this.dataService.setLoader(true)
    this.updateHeaders();
    let lData=this.saveJson();
    this.respData=lData;
    localStorage.setItem('date', this.date.toISOString());
    const resp = this.makeHTTPRequest(this.host+'/api/saveFile?date=' + this.getDateString(lData.date),'POST', JSON.stringify(lData));
    if (resp.success) {
      console.log("Post call done for "+this.date.toISOString())
      alert("Data Saved Successfully.");
    } else {
      alert("Data not Saved. Call Srithar.")
    }
    this.dataService.setLoader(false)
  }

  saveJson():JsonSchema{
    /***
    let lAccounts: Accounts[] = this.accounts;
    lAccounts.forEach((a) => { a.yestAmount = a.amount });

    let lServices: Services[] = this.services
    lServices.forEach((a) => { a.yestAmount = a.amount });
    */

    let data: JsonSchema = {
      date: this.date,
      accounts: this.accounts,
      services: this.services,
      custBalance: this.crPeoples.concat(this.drPeoples),
      cashBal: this.cashBal,
      todayExpenses: this.expenses,
      yestGT: this.yestGT,
      yestDiff: this.yestDiff,
      currentGT: this.currentGT,
      currentDiff:this.currentDiff
    }

    localStorage.setItem('date', this.date.toISOString());
    localStorage.setItem('data', JSON.stringify(data));

    return data;

    //localStorage.setItem('data', JSON.stringify(data));
    //return data;
  }

  /***
  downloadJson() {

    let data=this.saveJson();
    //console.log(JSON.stringify(data))
    //this.downloadFile('CSC-' + this.datepipe.transform(this.date, 'dd-MM-YYYY'), JSON.stringify(data));
    
  }

  **/


  clearForToday() {
    this.expenses = [];
    this.data.todayExpenses=[]
    this.accounts.forEach((e) => e.amount = 0);
    this.services.forEach((e) => e.amount = 0);
    this.cashBal.forEach((e) => e.value = 0)

    setTimeout(() => {
      this.updateHeaders();
    }, 500);
  }
 

  clearCache(event:any){
    var confirmation: boolean = confirm('Confirm Reset For Current Date?');
    if (confirmation) {
      event.stopPropagation();
      localStorage.clear();
      localStorage.setItem('date', this.date.toISOString());
      let temp=this.defaultData
      temp.date=this.date
      const resp = this.makeHTTPRequest(this.host+'/api/saveFile?date=' + this.getDateString(this.date),'POST', JSON.stringify(temp));
      if (resp.success) {
        window.location.reload();
      } else {
        console.error('Cannot make Post Call');
      }
    }
  }

  updateGT() {
    try {
      let newGT = prompt('Enter New GT Value')
      if (newGT != null) {
        this.yestGT = Number.parseInt(newGT);
        this.updateHeaders();
      }

    } catch (e) {
      alert('Enter only Number')
    }
  }

  ngAfterViewInit(): void {
    //this.date = new Date();
    setTimeout(() => {
      this.updateHeaders();
    }, 500);
  }

  //I just spent 3 whole fucking hours for this method to not to use async
  makeHTTPRequest(apiUrl:string,method:string,body?:string):Response {
    console.log(this.host+"::"+apiUrl)
    try {
      var xhr = new XMLHttpRequest();
      // The third parameter specifies whether the request should be asynchronous (false for synchronous)
      xhr.open(method, apiUrl, false);
      if (method == 'POST') {
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.send(body);
      } else if (method == 'GET') {
        xhr.send();
      }
      // Check if the request was successful (status code 200)
      if (xhr.status === 200) {
        this.isOnline=true
        return JSON.parse(xhr.responseText) as Response;
      } else {
        // Handle errors
        alert(xhr.statusText)
        this.isOnline=false
        console.error('Error:', xhr.statusText);
        return <Response>{ success: false };
      }
    } catch (e) {
      alert("Server isn't responding.. Call Srithar")
      this.isOnline=false
      console.error(e);
      return <Response>{ success: false };
    }
  }

  goToPrev(){
    if(new Date().toDateString()==this.date.toDateString() && this.currentDiff!=this.respData.currentDiff){
      if(confirm("Do you want to save the data?")){
        this.saveData()
      }
    }
    this.dataService.setLoader(true)
    if(this.prev!=null){
      let resp:Response=this.makeHTTPRequest(this.host+"/api/getFile?date="+this.prev,'GET');
      if(resp.success){
        this.prev=resp.yestFile
        this.tomorrow=resp.tomorrorwFile
        this.populateData(JSON.stringify(resp.data))
      }else{
        this.data=this.defaultData;
        console.error("Get call failed.")
      }
    }else{
      alert("Cannot go to Prev. Try Create a new file on that date.")
    }
    setTimeout(()=>{
      this.dataService.setLoader(false)
    },500)
  }

  goToNext(){
    if(new Date().toDateString()==this.date.toDateString()){
      if(confirm("Do you want to save the data?")){
        this.saveData()
      }
    }
    this.dataService.setLoader(true)
    
    if(this.tomorrow!=null){
      let resp:Response=this.makeHTTPRequest(this.host+"/api/getFile?date="+this.tomorrow,'GET');
      if(resp.success){
        this.prev=resp.yestFile
        this.tomorrow=resp.tomorrorwFile
        this.populateData(JSON.stringify(resp.data))
      }else{
        this.data=this.defaultData;
        console.error("Get call failed.")
      }
    }else{
      alert("Cannot go to Next. Try Create a new file on that date.")
    }
    setTimeout(()=>{
      this.dataService.setLoader(false)
    },500)
  }

  getLoader(){
    return this.dataService.getLoader()
  }

  openModal(){
    const modalDiv=document.getElementById('myModal')
    if(modalDiv!=null){
      modalDiv.style.display="block"
    }
  }

  modalOK(date:any){
    let mDate=new Date()

    if(date!='today'){
      let splitted=date.split("-")
      if(splitted.length==3 && splitted[0].length==2 && splitted[1].length==2 && splitted[2].length==4){
        mDate.setDate(parseInt(splitted[0]))
        mDate.setMonth(parseInt(splitted[1])-1)
        mDate.setFullYear(parseInt(splitted[2]))
        console.log(date)
      }
    }
    if(this.date.toDateString()!=mDate.toDateString()){
      localStorage.removeItem("date")
      this.date=mDate
      this.ngOnInit()
    }
  }

  getDateString(date:Date):string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}${month}${day}`;
  }

  getDateFromString(dateStr:string):Date {
    const year = parseInt(dateStr.substring(0, 4));
    const month = parseInt(dateStr.substring(4, 6)) - 1; // Months are zero-based in JavaScript, so subtract 1
    const day = parseInt(dateStr.substring(6, 8));
  
    let myDate = new Date();
    myDate.setFullYear(year);
    myDate.setMonth(month);
    myDate.setDate(day);
    return myDate
  }

  downloadJson() {

    let data=this.saveJson();

    console.log(JSON.stringify(data))
    this.downloadFile(this.getDateString(this.date), JSON.stringify(data));
    
  }

  downloadFile(filename: any, text: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/JSON;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  editHost(){
    let name = prompt('Please Enter the Host Name');
    if (name != null && name != "") {
      this.host=name
      localStorage.setItem("host",name)
    }
  }

}

interface JsonSchema {
  date: Date,
  accounts: Accounts[],
  services: Services[],
  custBalance: CustBalance[],
  cashBal: CashBal[],
  todayExpenses: Expenses[],
  yestGT: number,
  yestDiff: number,
  currentGT:number,
  currentDiff:number
}

interface Accounts { name: string, id: string, amount: number}

interface Services { name: string, id: string, amount: number}

interface CustBalance { custName: string, type: string, amount: number }

interface Expenses { name: string, notes: string, type: string, amount: number }

interface CashBal { id: string, denom: number, value: number }

interface Response { data:JsonSchema,success:boolean,message:string, yestFile:string, tomorrorwFile:string}
