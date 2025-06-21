import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  id: number;
  name: string;
  score: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>学生成绩表</h1>
    <div *ngIf="students.length > 0"> <!-- 添加数据存在检查 -->
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>成绩</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let student of students; trackBy: trackById"> <!-- 添加trackBy -->
            <td>{{student.id}}</td>
            <td>{{student.name}}</td>
            <td>{{student.score}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div *ngIf="students.length === 0">
      暂无学生数据
    </div>
  `,
  styles: [`
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  `]
})
export class AppComponent {
  students: Student[] = [
    { id: 1, name: '张三', score: 85 },
    { id: 2, name: '李四', score: 92 },
    { id: 3, name: '王五', score: 78 },
    { id: 4, name: '赵六', score: 88 },
    { id: 5, name: '钱七', score: 95 },
    { id: 6, name: '孙八', score: 81 },
    { id: 7, name: '周九', score: 79 },
    { id: 8, name: '吴十', score: 87 },
    { id: 9, name: '郑十一', score: 90 },
    { id: 10, name: '王十二', score: 83 }
  ];

  trackById(index: number, student: Student): number {
    return student.id;
  }
}
