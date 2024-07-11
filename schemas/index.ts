import profile from './profile';
import job from './job';
import project from './project';
import blockContent from './blockContent';
import { youtube } from './youtube';
import { table } from './table';
import quiz from './quiz';

export const schemaTypes = [
  profile,
  job,
  project,

  // Reference types
  blockContent,
  youtube,
  table,
  quiz,
];
