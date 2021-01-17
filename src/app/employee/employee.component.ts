import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  name = 'John';

  department = 'IT';

  hidden = false;

  postList = [];

  //  emp = new EmployeeService();
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empService.getPosts().
      subscribe((res: any) => this.postList = res);
  }

  toggle() {
    this.hidden = !this.hidden;
  }
}
