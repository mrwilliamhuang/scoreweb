import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { Router } from '@angular/router';
import { Student } from '@app/models';  // 添加这行导入

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedInStudent: any = null;

  constructor(private apiService: ApiService, private router: Router) {}

  async login(studentId: string, password: string): Promise<boolean> {
    try {
      const response = await this.apiService.login(studentId, password).toPromise();
      this.loggedInStudent = response;
      return true;
    } catch (error) {
      return false;
    }
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