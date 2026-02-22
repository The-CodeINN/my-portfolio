import profile from './profile';
import job from './job';
import project from './project';
import post from './post';
import author from './author';
import blockContent from './blockContent';
import { youtube } from './youtube';
import { table } from './table';
import quiz from './quiz';

export const schemaTypes = [
  profile,
  job,
  project,
  post,
  author,

  // Reference types
  blockContent,
  youtube,
  table,
  quiz,
];
