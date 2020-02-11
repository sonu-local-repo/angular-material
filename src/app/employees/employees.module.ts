import { EmployeeRouting } from './employee-router.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, MatPaginatorModule, MatCheckboxModule, MatFormFieldModule, } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent,

  ],
  imports: [
    CommonModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    EmployeeRouting,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class EmployeesModule { }
