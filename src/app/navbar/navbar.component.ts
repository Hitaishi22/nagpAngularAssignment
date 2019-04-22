import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  state: string = "add";
  id: number = 0;
  student: Student;
  private selectedTab = 0;
  constructor() { }

  ngOnInit() {

  }
  myCrazyCallback(formState: any) {
    this.id = formState.student.id;
    this.state = formState.state;
    this.student =formState.student;
    this.changeTab();
  }

  changeTab() {
    this.selectedTab += 1;
    if (this.selectedTab >= 2) this.selectedTab = 0;
  }

}
