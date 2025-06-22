import { Score } from '../models/score.model';
import { STUDENTS } from './mock-students';

const SUBJECTS = ['语文', '数学', '英语', '物理', '化学', '政治'];
const TYPES = ['期中', '期末'];

export const SCORES: Score[] = [];

STUDENTS.forEach(student => {
  SUBJECTS.forEach(subject => {
    TYPES.forEach(type => {
      const score = Math.floor(Math.random() * 21) + 70;
      SCORES.push({
        studentId: student.studentId,
        subject,
        type,
        score
      });
    });
  });
});
