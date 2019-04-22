import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var local= this.user();
  }

  get user(): any {
    return localStorage.getItem('currentUser');
}
}
