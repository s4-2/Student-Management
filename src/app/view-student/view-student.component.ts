import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  id!: number;
  student!: Student;
  constructor(private acrouter: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.acrouter.snapshot.params['id'];

    this.student = new Student();

    this.studentService.getStudentById(this.id).subscribe(data =>{
      this.student = data;
    });

  }

}
