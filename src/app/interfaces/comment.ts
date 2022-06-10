import { Data } from './data';
import { Followable } from './followable';
import { Image } from './image';

export interface Comment extends Data {
  author: Followable;

  content: string;
  images: Image[];
  readonly createdDate: Date;

  comments: Comment[];
}
