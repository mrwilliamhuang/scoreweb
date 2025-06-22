import { Score } from '../models/score.model';
import { Student } from '../models/score.model';
import { STUDENTS } from './mock-students';

const SUBJECTS = ['语文', '数学', '英语', '物理', '化学', '政治'];
const TYPES = ['期中', '期末'];

export const STUDENT_SCORES: any[] = [];

STUDENTS.forEach((student: Student) => {
  SUBJECTS.forEach((subject: string) => {
    TYPES.forEach((type: string) => {
      const score = Math.floor(Math.random() * 21) + 70;
      STUDENT_SCORES.push({
        studentId: student.studentId,
        subject,
        type,
        score
      });
    });
  });
});

// 导出 STUDENT_SCORES 为 SCORES
export { STUDENT_SCORES as SCORES };
