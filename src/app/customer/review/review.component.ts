import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../model/customer.model';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() customer: Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = this.customerService.getCustomerData();
    console.log(this.customer);
  }

}
