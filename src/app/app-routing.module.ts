import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'customer',
    loadChildren: () => import('../app/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'seller',
    loadChildren: () => import('../app/seller/seller.module').then(m => m.SellerModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../app/users/users.module').then(m => m.UsersModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
