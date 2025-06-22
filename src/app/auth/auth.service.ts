import { Injectable } from '@angular/core';
import { Student } from '@app/models';
import { STUDENTS } from '../student/mock-students';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStudent: Student | null = null;

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

  getLoggedInStudent(): Student | null {
    return this.loggedInStudent;
  }

  logout(): void {
    this.loggedInStudent = null;
  }
}