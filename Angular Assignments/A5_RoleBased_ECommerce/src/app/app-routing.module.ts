import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthChildGuard } from './auth-child.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProductManagementComponent } from './admin/product-management/product-management.component';
import { OrderManagementComponent } from './admin/order-management/order-management.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin', 'Manager', 'CustomerSupport'] },
    canActivateChild: [AuthChildGuard],
    children: [
      { path: 'products', component: ProductManagementComponent, data: { roles: ['Admin', 'Manager'] } },
      { path: 'orders', component: OrderManagementComponent, data: { roles: ['Admin', 'Manager', 'CustomerSupport'] } },
      { path: 'users', component: UserManagementComponent, data: { roles: ['Admin'] } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
