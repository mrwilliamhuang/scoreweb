import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STUDENTS } from './mock-students';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>学生成绩表</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="mat-form-field">
          <input matInput (keyup)="applyFilter($event)" placeholder="筛选学生">
        </div>
        <div *ngIf="dataSource.data.length > 0">
          <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
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
          <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
        </div>
        <div *ngIf="dataSource.data.length === 0">
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
  displayedColumns = ['id', 'name', 'score'];
  dataSource = new MatTableDataSource(STUDENTS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
