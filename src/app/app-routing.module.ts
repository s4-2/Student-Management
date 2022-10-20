import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {path: 'getStudent', component: ListStudentComponent},
  {path: 'addStudent', component: AddStudentComponent},
  {path: 'updateStudent/:id', component: UpdateStudentComponent},
  {path: 'viewStudent/:id', component: ViewStudentComponent},
  {path: '', redirectTo: 'getStudent', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
