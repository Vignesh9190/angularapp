import { Injectable } from '@angular/core';
import { Customer, CustomerGeneralInfo, CustomerContactInfo, CustomerIdentityInfo, CustomerIncomeInfo } from '../model/customer.model';

// @Injectable({
//   //providedIn: 'root'
// })
@Injectable()  
export class CustomerService {
  public customer: Customer = new Customer();

  constructor() { }

  setCustomerId(data: Customer) {
    this.customer.customerId = data.customerId;
  }

  setGeneralInfo(data: CustomerGeneralInfo) {
    this.customer.firstName = data.firstName;
    this.customer.lastName = data.lastName;
    this.customer.dob = data.dob;
    this.customer.age = data.age;
    this.customer.address = data.address;
    this.customer.city = data.city;
    this.customer.state = data.state;
    this.customer.country = data.country;
    this.customer.zipcode = data.zipcode;
  } 
  setContactInfo(data: CustomerContactInfo){
    this.customer.emailId = data.emailId;
    this.customer.emailpriority = data.emailpriority;
    this.customer.phone = data.phone;
    this.customer.phonePriority = data.phonePriority;
  }
  setIdentityInfo(data: CustomerIdentityInfo) {
    this.customer.proofType = data.proofType;
    this.customer.proofNumber = data.proofNumber;
  }
  setIncomeInfo(data: CustomerIncomeInfo){
    this.customer.annualIncome = data.annualIncome;
    this.customer.monthlyIncome = data.monthlyIncome;
  }
  getCustomerData() : Customer {
    console.log(this.customer);
    return this.customer;
  }
}
