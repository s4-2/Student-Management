import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  student!: Student[]; 
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getStudent();
  }

  private getStudent(){
    this.studentService.getStudentList().subscribe(data => {
      this.student = data;
    });
  }

  viewStudent(id: number){
    this.router.navigate(['/viewStudent', id]);
  }

  updateStudent(id: number){
      this.router.navigate(['/updateStudent', id]);
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log(data);
      this.getStudent();
    })
  }

 


}
