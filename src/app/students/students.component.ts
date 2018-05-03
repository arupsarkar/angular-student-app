import { Component, OnInit } from '@angular/core';
// import { Student } from '../student';
import { STUDENTS } from '../mock-students';
import {Student} from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = STUDENTS;
  // student: Student = {
  //   id: 1,
  //   name: 'John Smith',
  //   city: 'New York'
  // };

  selectedStudent: Student;
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  constructor() { }

  ngOnInit() {
  }

}
