import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { ContactComponent } from './contact/contact.component';
import {IdentityComponent } from './identity/identity.component';
import{ IncomeComponent } from './income/income.component';
import{ ReviewComponent } from './review/review.component';
import { WizardComponent } from './wizard/wizard.component';
import { TempComponent } from './temp/temp.component';
//const routes: Routes = [];
export const DETAILS_ROUTES : Routes= [
  { path: '', component: TempComponent},
  { path: 'temp', component: TempComponent},
  //{ path: 'wizard', component: WizardComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'identity', component: IdentityComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'review', component: ReviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(DETAILS_ROUTES)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
