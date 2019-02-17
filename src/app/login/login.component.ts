import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerService} from "../service/customer.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() customer;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService : CustomerService) { }

  ngOnInit() {
    
    this.customer = this.customerService.getCustomerData();
    this.loginForm = this.formBuilder.group({
      customer_Id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.loginForm.controls.customer_Id.value == 'I19002' && this.loginForm.controls.password.value == 'password') {
      console.log('reached123');
      this.customerService.setCustomerId(this.loginForm.value);
      this.router.navigate(['temp']);  
      window.alert('valid login');
        
    }else {
      window.alert('Invalid login');
    }
    
  }

}