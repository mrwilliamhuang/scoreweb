import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student/student-list.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StudentListComponent, MatCardModule],
  template: `
    <app-student-list />
  `,
  styles: [`
    h1 {
      color: #333;
      text-align: center;
      padding: 1rem 0;
    }
  `]
})
export class AppComponent {}
