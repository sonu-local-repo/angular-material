import { PaginationParams } from './../model/pagination.model';
import { EmployeeServiceService } from './../employee-service.service';
import { EmployeeModel } from '../../model/employee.model';
import { Component, OnInit, ViewChild, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { MatTableDataSource, MatSort, PageEvent, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';
import { switchMap, map, startWith } from 'rxjs/operators';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, AfterViewInit, OnChanges {

  dataSource: MatTableDataSource<EmployeeModel> = new MatTableDataSource([]);
  displayedColumns = ['select', 'id', 'name', 'username', 'email', 'gender', 'doj', 'phone', 'Actions'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pager = {};
  pageOfItems = [];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private employeeService: EmployeeServiceService, public dialog: MatDialog) { }



  ngOnInit() {
    this.getCustomers();
    console.log('changes')
  }
  ngAfterViewInit() {

  }
  ngOnChanges(changes: SimpleChanges) {


  }
  getCustomers(){
    this.paginator.page.pipe(
      startWith({}),
      switchMap(()=>{
        console.log(this.paginator)
        console.log(this.paginator.pageSize === undefined)
        const pagination = new PaginationParams();
        pagination.page = this.paginator.pageIndex;
        pagination.size = this.paginator.pageSize === undefined ?  this.pageSize : this.paginator.pageSize;
        return this.employeeService.getData(pagination);
      } )

    ).subscribe(data =>{
      this.dataSource.data = data["content"];
      this.length = data["totalElements"];
    })
    // this.employeeService.getData().subscribe(data =>{
    //   this.dataSource.data = data["content"];
    //   console.log(this.dataSource)
    //   this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    //   this.length = data["totalElements"];
    // });
  }

  isAllSelected() {
    // const numSelected = 5;
    // const numRows = 5;
    // return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    // this.isAllSelected() ?
    //     this.selection.clear() :
    //     this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row? ) {
    // if (!row) {
    //   return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    // }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addNewEmployee() {
     let newEmployee = this.dialog.open(NewEmployeeComponent, {
      width: '105%',
      data: {firstName: 'Sonu Sadanandan'}
    });
    newEmployee.afterClosed().subscribe(val => console.log(`Dialog Closed ${val.firstName} `))
  }


}


