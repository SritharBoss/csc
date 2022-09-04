import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.updateHeaders();
  }

  data: JsonSchema = { "date": "01/01/2024 00:00:00", "accounts": [{ "name": "CASH IN HAND", "id": "accounts-1", "amount": 0, "yestAmount": 0 }, { "name": "PVL CUB", "id": "accounts-2", "amount": 0, "yestAmount": 0 }, { "name": "PVL SBI CR", "id": "accounts-3", "amount": 0, "yestAmount": 0 }, { "name": "PVL SBI SB", "id": "accounts-4", "amount": 0, "yestAmount": 0 }, { "name": "BHANU UBI", "id": "accounts-5", "amount": 0, "yestAmount": 0 }, { "name": "DIGIPAY", "id": "accounts-6", "amount": 0, "yestAmount": 0 }, { "name": "RABIPAY", "id": "accounts-7", "amount": 0, "yestAmount": 0 }, { "name": "BHANU SBI OD", "id": "accounts-8", "amount": 0, "yestAmount": 0 }, { "name": "BHANU SBI", "id": "accounts-9", "amount": 0, "yestAmount": 0 }, { "name": "CSC DIGITAL SEVA", "id": "accounts-10", "amount": 0, "yestAmount": 0 }, { "name": "SMART SHOP", "id": "accounts-11", "amount": 0, "yestAmount": 0 }, { "name": "I-NET", "id": "accounts-12", "amount": 0, "yestAmount": 0 }, { "name": "Google Business", "id": "accounts-13", "amount": 0, "yestAmount": 0 }], "services": [{ "name": "SUNDIRECT", "id": "serv-1", "amount": 0, "yestAmount": 0 }, { "name": "A/T DIGITAL TV", "id": "serv-2", "amount": 0, "yestAmount": 0 }, { "name": "Tata sky", "id": "serv-3", "amount": 0, "yestAmount": 0 }, { "name": "A/T MOBILE", "id": "serv-4", "amount": 0, "yestAmount": 0 }, { "name": "VODAFONE 1+2", "id": "serv-5", "amount": 0, "yestAmount": 0 }, { "name": "JIO 1+2", "id": "serv-6", "amount": 0, "yestAmount": 0 }, { "name": "BSNL", "id": "serv-7", "amount": 0, "yestAmount": 0 }, { "name": "V/C TV", "id": "serv-8", "amount": 0, "yestAmount": 0 }, { "name": "Bismi PAN", "id": "serv-9", "amount": 0, "yestAmount": 0 }, { "name": "STAR COMMUNICATION", "id": "serv-10", "amount": 0, "yestAmount": 0 }], "custBalance": [{ "custName": "Sriram", "type": "c", "amount": 0 }, { "custName": "Vasu", "type": "c", "amount": 0 }, { "custName": "Marikannu", "type": "d", "amount": 0 }, { "custName": "Venkat", "type": "d", "amount": 0 }], "cashBal": [{ "id": "cash_1", "denom": 2000, "value": 5 }, { "id": "cash_2", "denom": 500, "value": 1 }, { "id": "cash_3", "denom": 200, "value": 5 }, { "id": "cash_4", "denom": 100, "value": 1 }, { "id": "cash_5", "denom": 50, "value": 5 }, { "id": "cash_6", "denom": 20, "value": 1 }, { "id": "cash_7", "denom": 10, "value": 1 }, { "id": "cash_8", "denom": 5, "value": 1 }], "todayExpenses": [{ "name": "Modem EC", "notes": "For SHop Mobile", "type": "d", "amount": 0 }, { "name": "Expense 2", "notes": "For Expense", "type": "d", "amount": 0 }],"yestGT":0,"yestDiff": 0 };
  accounts: Accounts[] = this.data.accounts;
  services: Services[] = this.data.services;
  crPeoples: CustBalance[] = this.data.custBalance.filter((value: any) => { return value.type == 'c' });
  drPeoples: CustBalance[] = this.data.custBalance.filter((value: any) => { return value.type == 'd' });
  cashBal: CashBal[] = this.data.cashBal;
  expenses: Expenses[] = this.data.todayExpenses;

  jsonFile: any;
  show: boolean = true;
  date = this.getDate(this.data.date);


  currentAccountSum = 0;
  currentServicesSum = 0;
  currentCrBal = 0;
  currentDebBal = 0;
  currentDenom = 0;
  currentExpenses = 0;

  currentGT: number = 0;
  yestGT:number=0

  currentDiff = 0;
  yestDiff=0

  fileChanged(e: any) {
    this.jsonFile = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsText(this.jsonFile);

    fileReader.onloadend = (e) => {
      this.populateData(fileReader.result);
    }
  }

  populateData(result: any) {
    let data:any;
    try {
      data = JSON.parse(result); 
    } catch (error) {
      alert('File Error')
    }

    this.accounts = data.accounts;
    this.services = data.services;
    this.crPeoples = data.custBalance.filter((value: any) => { return value.type == 'c' });
    this.drPeoples = data.custBalance.filter((value: any) => { return value.type == 'd' });
    this.cashBal = data.cashBal;
    this.expenses = data.todayExpenses;
    this.date = this.getDate(data.date);
    this.yestGT=data.yestGT;
    this.yestDiff=data.yestDiff;

    this.currentDiff=this.currentGT - this.yestGT + this.currentExpenses;

    this.updateHeaders();

  }

  addUser(mode: string) {
    let name = prompt('Please Enter the Name');
    if (name != null && name != "") {
      if (mode == 'cr') {
        this.crPeoples.push({ "custName": name, "type": "c", "amount": 0 })
      } else if (mode == 'dr') {
        this.drPeoples.push({ "custName": name, "type": "d", "amount": 0 })
      } else if (mode == 'ex') {
        this.expenses.push({ "name": name, "notes": "", "type": "d", "amount": 0 })
      }
    }
  }

  deleteRow(name: string, mode: string) {
    if (mode == 'cr') {
      this.crPeoples = this.crPeoples.filter((value) => { return value.custName != name && value.type == 'c' })
    } else if (mode == 'dr') {
      this.drPeoples = this.drPeoples.filter((value) => { return value.custName != name && value.type == 'd' })
    } else if (mode == 'ex') {
      this.expenses = this.expenses.filter((value) => { return value.name != name })
    }
  }

  getDate(str: String): Date {
    //const str = '21/07/2024 04:24:37';
    const [dateComponents, timeComponents] = str.split(' ');
    const [day, month, year] = dateComponents.split('/');
    const [hours, minutes, seconds] = timeComponents.split(':');

    return new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);

  }

  onChange(event: any, module: string) {

    if (module == 'accounts') {
      this.currentAccountSum = 0;
      this.accounts.forEach(element => {
        this.currentAccountSum = this.currentAccountSum + +(document.getElementById("id_" + element.id) as HTMLInputElement).value;
      });
    } else if (module == 'services') {
      this.currentServicesSum = 0;
      this.services.forEach(element => {
        this.currentServicesSum = this.currentServicesSum + +(document.getElementById("id_" + element.id) as HTMLInputElement).value;
      });
    } else if (module == 'cust-c') {
      this.currentCrBal = 0;
      this.crPeoples.forEach(element => {
        this.currentCrBal = this.currentCrBal + +(document.getElementById("id_" + element.custName) as HTMLInputElement).value;
      });
    } else if (module == 'cust-d') {
      this.currentDebBal = 0;
      (this.drPeoples as CustBalance[]).forEach(e => {
        this.currentDebBal = this.currentDebBal + +(document.getElementById("id_" + e.custName + "_" + e.type) as HTMLInputElement).value;
      });
    } else if (module == 'denom') {
      this.currentDenom = 0;
      this.cashBal.forEach(element => {
        this.currentDenom = this.currentDenom + +(document.getElementById("id_" + element.id) as HTMLInputElement).value * element.denom;
      });

      (document.getElementById("id_accounts-1") as HTMLInputElement).value = this.currentDenom.toString();
      this.onChange(event, 'accounts');

    } else if (module == 'expense') {
      this.currentExpenses = 0;
      this.expenses.forEach(element => {
        this.currentExpenses = this.currentExpenses + +(document.getElementById("id_" + element.name + "_" + element.type) as HTMLInputElement).value;
      });
    }
    this.updateSubHeadersData();
  }

  updateSubHeadersData() {
    this.currentGT = this.currentServicesSum + this.currentAccountSum + this.currentCrBal - this.currentDebBal;
    this.currentDiff=this.currentGT - this.yestGT + this.currentExpenses;
  }

  updateHeaders() {
    this.onChange('', 'accounts');
    this.onChange('', 'services');
    this.onChange('', 'cust-c');
    this.onChange('', 'cust-d');
    this.onChange('', 'denom');
    this.onChange('', 'expense');
  }

  downloadJson(){
    let data:JsonSchema={
      date:this.date.toString(),
      accounts:this.accounts,
      services:this.services,
      custBalance:this.crPeoples.concat(this.drPeoples),
      cashBal:this.cashBal,
      todayExpenses:this.expenses,
      yestGT: this.currentGT,
      yestDiff:this.yestGT
    }
    console.log(JSON.stringify(data))
  }

}

interface JsonSchema {
  date: string,
  accounts: Accounts[],
  services: Services[],
  custBalance: CustBalance[],
  cashBal: CashBal[],
  todayExpenses: Expenses[]
  yestGT:number;
  yestDiff:number;
}

interface CustBalance { custName: string, type: string, amount: number }

interface Accounts { name: string, id: string, amount: number, yestAmount: number }

interface Services { name: string, id: string, amount: number, yestAmount: number }

interface CashBal { id: string, denom: number, value: number }

interface Expenses { name: string, notes: string, type: string, amount: number }