import { Image } from './image';
import { Page } from './page';
import { Profile } from './profile';

export interface Post {
  readonly uid: string;
  user: Profile;
  page: Page;

  content: string;
  images: Image[];

  updatedDate: Date;
  readonly createdDate: Date;

  comments: Comment[];
}
