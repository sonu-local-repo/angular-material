import { EmployeeServiceService } from './../employee-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeServiceService) { }

  ngOnInit() {

    // this.employeeService.getCustomer(this.activatedRoute.snapshot.paramMap.get('id'))
    // .subscribe(data => console.log(data))
  }



}
