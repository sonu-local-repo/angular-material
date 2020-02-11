import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl('')
  });

  constructor( public dialogRef: MatDialogRef<NewEmployeeComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }
  addNewEmployee(event: Event) {
    console.log("add new employee component" + this.form.value.firstName);
    console.log("event:" + this.data.firstName)
  }



}
