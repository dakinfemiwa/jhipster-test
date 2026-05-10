import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 31623,
  title: 'bump',
};

export const sampleWithPartialData: ITask = {
  id: 5401,
  title: 'convection bah fooey',
  description: '../fake-data/blob/hipster.txt',
  isComplete: true,
};

export const sampleWithFullData: ITask = {
  id: 25540,
  title: 'voluntarily',
  description: '../fake-data/blob/hipster.txt',
  dueDate: dayjs('2026-05-10T10:48'),
  isComplete: true,
  isPublic: false,
};

export const sampleWithNewData: NewTask = {
  title: 'taxicab bossy a',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
