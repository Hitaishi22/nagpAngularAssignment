import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../shared/models/student';
import { Subject, observable } from 'rxjs';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-student-listing',
  templateUrl: './student-listing.component.html',
  styleUrls: ['./student-listing.component.css']
})
export class StudentListingComponent implements OnInit {

  students;
  allStudents;
  searchText;
  text;
  oldText
  appState = 'default';
  studentArray: Array<Student> = [];
  options  =['All','Domestic','International'];
  selectedCategory;
  @Output() getStudentIdChange : EventEmitter<any> = new EventEmitter<any>(); 

  constructor(private studentService: StudentService) {
  
   }

  ngOnInit() {
    this.getStudents();
  }

 
  getStudents(){
    this.studentService.getStudents().subscribe((res: Student[]) => {
      this.students = this.allStudents = res;
    });
  }

  deleteStudents(student) {
    // for (let i = 0; i < this.students.length; i++) {
    //   if (this.students[i] == student) {
    //     this.students.splice(i, 1);
    //   }
    // }

    this.studentService.deleteStudents(student);
  }

  editStudent(student) {
    let formState = {
      'student' : student,
      'state' : 'edit'
    }
    // this.appState = 'edit';
    // this.oldText = todo.text;
    // this.text = todo.text;
    this.getStudentIdChange.emit(formState) ;
  }

  updateStudent() {
    console.log(this.text);
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].text == this.oldText) {
        this.students[i].text = this.text;
      }
    }

    this.studentService.updateStudents(this.oldText, this.text);
  }

  onSelect(){
    this.students = this.allStudents.filter(x => x.category == this.selectedCategory || this.selectedCategory== 'All')
  }
 

}
