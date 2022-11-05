import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../iemployee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userName: string = '';

  employees: IEmployee[] = [
    { empName: 'ahmed', empAge: 25, empSalary: 2500 },
    { empName: 'sara', empAge: 22, empSalary: 2500 },
    { empName: 'ibraheem', empAge: 20, empSalary: 6000 },
    { empName: 'mahmoud', empAge: 25, empSalary: 9000 },
  ];
}
