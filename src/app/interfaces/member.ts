import { Followable } from './followable';
import { Role } from './role';

export interface Member {
  member: Followable;
  role: Role;
}
