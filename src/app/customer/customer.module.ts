import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ProfileDetailComponent } from './customer-profile/profile-detail/profile-detail.component';


@NgModule({
  declarations: [
    CustomerProfileComponent,
    CustomerHomeComponent,
    ProfileDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
