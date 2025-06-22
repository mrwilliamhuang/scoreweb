import { Student } from '@app/models';
import { Student } from '../models/score.model'; // 使用 score.model 中的 Student 接口

export const STUDENTS: Student[] = [
  { id: 1, studentId: 'S001', name: '张三', password: 'pass123' },
  { id: 2, studentId: 'S002', name: '李四', password: 'pass456' }
];