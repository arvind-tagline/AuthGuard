import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth service/auth.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { ProfileComponent } from './profile/profile.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  {
    path: 'sellerHome',
    canActivate: [AuthGuard],
    component: SellerComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'addProduct',
    component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
