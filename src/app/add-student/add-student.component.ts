import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = new Student();

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
  }

  saveStudent(){
    this.studentService.addStudent(this.student).subscribe(data => {
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/getStudent'])
  }

  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }

}
