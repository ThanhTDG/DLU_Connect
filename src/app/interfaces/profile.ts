import { Followable } from './followable';

export interface Profile extends Followable {
  email: string;
  emailVerified: boolean;
  displayName: string;
  photoUrl: string;

  firstName: string;
  lastName: string;
  birthdate: Date;
  gender: 'M' | 'F' | 'U'; // M: Male, F: Female, U: Unknown
  backgroundUrl: string;
}
