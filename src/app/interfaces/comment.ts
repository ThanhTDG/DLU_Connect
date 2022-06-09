import { Image } from './image';
import { Page } from './page';
import { Profile } from './profile';

export interface Comment {
  readonly uid: string;
  user: Profile;
  page: Page;

  content: string;
  images: Image[];
  readonly createdDate: Date;

  comments: Comment[];
}
