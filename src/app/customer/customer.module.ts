import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { CustomerRoutingModule } from './customer-routing.module';
import { GeneralComponent } from './general/general.component';
import { ContactComponent } from './contact/contact.component';
import { IdentityComponent } from './identity/identity.component';
import { IncomeComponent } from './income/income.component';
import { ReviewComponent } from './review/review.component';
import { WizardComponent } from './wizard/wizard.component';
import { TempComponent } from './temp/temp.component';
import { CustomerService } from '../service/customer.service';

@NgModule({
  declarations: [GeneralComponent, ContactComponent, IdentityComponent, IncomeComponent, ReviewComponent, WizardComponent, TempComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService]
})
export class CustomerModule { }
