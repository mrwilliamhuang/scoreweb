import { Injectable } from '@angular/core';
import { Student } from '../models/score.model';
import { STUDENTS } from '../student/mock-students';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStudent: any = null;

  login(studentId: string, password: string): Student | null {
    const student = STUDENTS.find((s: Student) => s.studentId === studentId && s.password === password);
    if (student) {
      this.loggedInStudent = student;
      return student;
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!this.loggedInStudent;
  }

  getLoggedInStudent(): any {
    return this.loggedInStudent;
  }

  logout(): void {
    this.loggedInStudent = null;
  }
}