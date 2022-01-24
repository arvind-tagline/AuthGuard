import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth service/auth.guard';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { ProfileDetailComponent } from './customer-profile/profile-detail/profile-detail.component';

const routes: Routes = [
  {
    path: 'customerHome',
    component: CustomerHomeComponent
  },
  {
    path: 'customerProfile',
    component: CustomerProfileComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'profileDetail',
        component: ProfileDetailComponent,
        canDeactivate: [AuthGuard]
      }
    ]
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
