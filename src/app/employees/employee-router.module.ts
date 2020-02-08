import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';



const employeeRouting: Routes = [
  {path:'', component: EmployeeListComponent},
  {path: 'id/:id', component: EmployeeDetailsComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(employeeRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeeRouting {}
