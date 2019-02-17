import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  formLabel: string ="Contact Info";
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService : CustomerService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      email_id: ['',[Validators.required]],
      email_priority: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      phone_priority: ['',[Validators.required]]
    })
  }

  onSubmit() {
    console.log('contact');
    console.log(this.contactForm.value);
    this.customerService.setContactInfo(this.contactForm.value);
    this.router.navigate(['identity']);
  }

}
