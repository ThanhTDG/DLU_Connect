import { Followable } from './followable';
import { Profile } from './profile';

export interface Page extends Followable {
  user: Profile;
  name: string;
  description: string;
  photoUrl: string;
  backgroundUrl: string;
  createdDate: Date;
}
