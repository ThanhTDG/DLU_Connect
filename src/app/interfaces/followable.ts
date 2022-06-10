import { Data } from './data';

export interface Followable extends Data {
  friends: Followable[];
  followers: Followable[];
  following: Followable[];
}
