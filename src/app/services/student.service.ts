import { Injectable } from '@angular/core';
import { Student } from '../shared/models/student';
import { Init } from '../shared/init-students';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends Init{

  students: BehaviorSubject<Array<Student>> = new BehaviorSubject(new Array<Student>());
  constructor() {
    super();
    console.log('StudentsService Works');
    this.load();
  }


  getStudents() {
    this.students.next(<Student[]>JSON.parse(localStorage.getItem('students')));
    return this.students;
  }

  addStudents(newStudent: Student) {
    let students = JSON.parse(localStorage.getItem('students'));
    // Add New TodoService
    if(!students){
      students = [];
    }
    students.push(newStudent);
    // Set New Todos
    localStorage.setItem('students', JSON.stringify(students));
  }

  deleteStudents(student) {
    let students = JSON.parse(localStorage.getItem('students'));

    for (let i = 0; i < students.length; i++) {
      if (students[i].name == student.name) {
        students.splice(i, 1);
      }
    }
    // Set New Todos
    localStorage.setItem('students', JSON.stringify(students));
  }

  updateStudents(oldText, newText) {
    let students = JSON.parse(localStorage.getItem('students'));

    for (let i = 0; i < students.length; i++) {
      if (students[i].text == oldText) {
        students[i].text = newText;
      }
    }
    // Set New Todos
    localStorage.setItem('students', JSON.stringify(students));
  }


}
