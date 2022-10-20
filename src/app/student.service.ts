import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  
  constructor(private httpClient: HttpClient) { }

  private baseUrl1 = `http://localhost:8999/std/getAllStudent`;
  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl1}`);
  }

  private baseUrl2 = `http://localhost:8999/std/addStudent`;
  addStudent(student: Student): Observable<Object>{
      return this.httpClient.post(`${this.baseUrl2}`,student);
  }

  private baseUrl3 = `http://localhost:8999/std/updateStudent`;
  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put<Student>(`${this.baseUrl3}/${id}`, student);
  }

  private baseUrl4 = `http://localhost:8999/std/getStudentById`;
  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl4}/${id}`);
  }

  private baseUrl5 = `http://localhost:8999/std/deleteStudent`;
  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl5}/${id}`);
  }
}
