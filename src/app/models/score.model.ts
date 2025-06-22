import { Student } from '../models/score.model';

export interface Score {
  studentId: string;
  type: string;
  subject: string;
  score: number;
}