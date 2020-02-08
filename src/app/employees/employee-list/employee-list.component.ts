import { EmployeeServiceService } from './../employee-service.service';
import { EmployeeModel } from '../../model/employee.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<EmployeeModel[]>();
  displayedColumns = ['select', 'id', 'name', 'username', 'email', 'gender', 'doj', 'phone', 'Actions'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  selection = new SelectionModel<any>(true, []);

  constructor(private employeeService: EmployeeServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.employeeService.getData().subscribe(data =>{
      this.dataSource = data;
      // console.log(data)
      this.dataSource.sort = this.sort;
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = 5;
    const numRows = 5;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row? ): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addNewEmployee() {
     this.dialog.open(NewEmployeeComponent, {
      width: '105%',
      data: {firstName: 'Sonu Sadanandan'}
    });
  }

}
