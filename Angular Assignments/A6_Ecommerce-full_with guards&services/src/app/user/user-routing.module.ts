import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerGuard } from '../auth/customer.guard';
import { ManagerGuard } from '../auth/manager.guard';
import { AdminGuard } from '../auth/admin.guard';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent,canActivate:[CustomerGuard]},
  {path:'',component:DashboardComponent}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class UserRoutingModule { }
