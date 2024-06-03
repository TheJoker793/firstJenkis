import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { ListDeptComponent } from './list-dept/list-dept.component';
import { DeptComponent } from './dept/dept.component';


@NgModule({
  declarations: [
    AddDeptComponent,
    ListDeptComponent,
    DeptComponent
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule
  ]
})
export class DashboardAdminModule { }
