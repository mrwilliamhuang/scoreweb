import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Score } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000'; // Flask默认端口

  constructor(private http: HttpClient) {}

  getStudentScores(studentId: string): Observable<Score[]> {
    return this.http.get<Score[]>(`${this.apiUrl}/students/${studentId}/scores`);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
}
