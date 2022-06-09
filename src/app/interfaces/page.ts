import { Profile } from './profile';

export interface Page {
  readonly uid: string;
  creator: Profile;
  name: string;
  description: string;
  photoUrl: string;
  backgroundUrl: string;
  createdDate: Date;
}
