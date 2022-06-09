export interface Profile {
  readonly uid: string;
  firstName: string;
  lastName: string;
  birthdate: Date;
  gender: 'M' | 'F' | 'U';
  backgroundUrl: string;

  friends: Profile[];
  followers: Profile[];
  following: Profile[];
}
