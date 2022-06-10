import { Data } from './data';
import { Followable } from './followable';
import { Member } from './member';
import { Post } from './post';

export interface Group extends Data {
  owner: Followable;

  name: string;
  description: string;
  photoUrl: string;
  backgroundUrl: string;
  readonly createdDate: Date;

  members: Member[];
  posts: Post[];
}
