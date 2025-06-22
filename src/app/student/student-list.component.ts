import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STUDENTS } from './mock-students';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>学生成绩表</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div *ngIf="students.length > 0">
          <table mat-table [dataSource]="students" class="mat-elevation-z8">
            <!-- ID Column -->
            <ng-container matColumnDef="id">
              <th mat-header-cell *matHeaderCellDef>ID</th>
              <td mat-cell *matCellDef="let student">{{student.id}}</td>
            </ng-container>

            <!-- Name Column -->
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef>姓名</th>
              <td mat-cell *matCellDef="let student">{{student.name}}</td>
            </ng-container>

            <!-- Score Column -->
            <ng-container matColumnDef="score">
              <th mat-header-cell *matHeaderCellDef>成绩</th>
              <td mat-cell *matCellDef="let student">{{student.score}}</td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
        </div>
        <div *ngIf="students.length === 0">
          暂无学生数据
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    table {
      width: 100%;
    }
    .mat-card {
      margin-bottom: 20px;
    }
  `]
})
export class StudentListComponent {
  students = STUDENTS;
  displayedColumns = ['id', 'name', 'score'];
}