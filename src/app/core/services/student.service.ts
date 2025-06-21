import { Injectable } from '@angular/core';
import { Student } from '../../models/student.model';  // 修正路径

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    // 学生数据可以移到这里
  ];

  getStudents(): Student[] {
    return this.students;
  }
}
