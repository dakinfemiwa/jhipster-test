import dayjs from 'dayjs/esm';
import { IUser } from 'app/entities/user/user.model';

export interface ITask {
  id: number;
  title?: string | null;
  description?: string | null;
  dueDate?: dayjs.Dayjs | null;
  isComplete?: boolean | null;
  isPublic?: boolean | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
}

export type NewTask = Omit<ITask, 'id'> & { id: null };
