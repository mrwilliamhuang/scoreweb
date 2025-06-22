import { Injectable } from '@angular/core';
import { Student } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { id: 1, studentId: 'S001', name: '张三', password: 'pass123' },
    { id: 2, studentId: 'S002', name: '李四', password: 'pass456' }
  ];

  getStudents(): Student[] {
    return this.students;
  }
}
