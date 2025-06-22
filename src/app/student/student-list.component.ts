import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SCORES } from './mock-scores';
import { Score } from '../models/score.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  template: `
    <button mat-raised-button color="warn" (click)="logout()" style="float:right;margin:10px;">登出</button>
    <div *ngIf="dataSource.data.length > 0">
      <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
        <!-- 学号列 -->
        <ng-container matColumnDef="studentId">
          <th mat-header-cell *matHeaderCellDef>学号</th>
          <td mat-cell *matCellDef="let row">{{row.studentId}}</td>
        </ng-container>
        <!-- 科目列 -->
        <ng-container matColumnDef="subject">
          <th mat-header-cell *matHeaderCellDef>科目</th>
          <td mat-cell *matCellDef="let row">{{row.subject}}</td>
        </ng-container>
        <!-- 类型列 -->
        <ng-container matColumnDef="type">
          <th mat-header-cell *matHeaderCellDef>类型</th>
          <td mat-cell *matCellDef="let row">{{row.type}}</td>
        </ng-container>
        <!-- 成绩列 -->
        <ng-container matColumnDef="score">
          <th mat-header-cell *matHeaderCellDef>成绩</th>
          <td mat-cell *matCellDef="let row">{{row.score}}</td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
      <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
    </div>
    <div *ngIf="dataSource.data.length === 0">
      暂无成绩数据
    </div>
  `,
  styles: [`
    .mat-form-field {
      font-size: 14px;
      width: 100%;
      margin-bottom: 20px;
    }
    .mat-paginator {
      margin-top: 20px;
    }
  `]
})
export class StudentListComponent implements AfterViewInit {
  displayedColumns = ['studentId', 'subject', 'type', 'score'];
  dataSource = new MatTableDataSource<Score>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private authService: AuthService, private router: Router) {
    const student = this.authService.getLoggedInStudent();
    if (!student) {
      this.router.navigate(['/login']);
    } else {
      // 只显示当前学生成绩
      this.dataSource.data = SCORES.filter(s => s.studentId === student.studentId);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
