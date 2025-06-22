export interface Student {
  id: number;
  studentId: string;
  name: string;
  password: string;
}

import { exec } from 'child_process';
import { promisify } from 'util';
const execAsync = promisify(exec);

try {
  await execAsync('rm /home/william/repo/web/src/app/models/student.model.ts');
  console.log('student.model.ts 文件已成功删除');
} catch (error) {
  console.error('删除文件时出错:', error);
}
