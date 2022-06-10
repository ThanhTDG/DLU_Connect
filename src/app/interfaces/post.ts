import { Comment } from './comment';
import { Data } from './data';
import { Followable } from './followable';
import { Image } from './image';

export interface Post extends Data {
  author: Followable;

  content: string;
  images: Image[];

  updatedDate: Date;
  readonly createdDate: Date;

  comments: Comment[];
}
