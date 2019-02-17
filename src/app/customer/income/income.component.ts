import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router"; 
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  incomeForm: FormGroup;
  formLabel: string ="Income Info";

  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.incomeForm = this.formBuilder.group({
      annual_income: ['', Validators.required],
      monthly_income: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('income');
    console.log(this.incomeForm.value);
    this.customerService.setGeneralInfo(this.incomeForm.value);
    this.router.navigate(['review']);
  }
}
