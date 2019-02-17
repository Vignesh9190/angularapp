import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router"; 
import { Customer, CustomerGeneralInfo } from '../../model/customer.model';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})

export class GeneralComponent implements OnInit {
  customer : Customer;
  customerGeneralInfo : CustomerGeneralInfo;
  generalForm: FormGroup;
  formLabel: string ="General Info";
  cities = ['Guindy','T.Nagar','Anna Nagar'];
  states = ['Tamil Nadu','kerala','Andhra pradesh'];
  countries = ['India','USA','UK'];
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
   // this.generalForm.setValue = this.customerService.getGeneralInfo();
    //console.log(this.customerGeneralInfo);
    this.generalForm = this.formBuilder.group({
      first_Name: ['', [Validators.required,Validators.maxLength(32),Validators.minLength(2)]],
      last_Name: ['', [Validators.required,Validators.maxLength(16),Validators.minLength(1)]],
      dob: ['', [Validators.required]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required,Validators.maxLength(56),Validators.minLength(2)]],
      city: ['',Validators.required],
      state: ['',Validators.required],
      country: ['',Validators.required],
      zipcode: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(7)]]
    });
  }

  onSubmit() {
    console.log('validated');
    console.log(this.generalForm.value);
    this.customerService.setGeneralInfo(this.generalForm.value);
    this.router.navigate(['contact']);
  }

}
