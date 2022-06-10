import { DocumentReference } from '@angular/fire/firestore';

export interface Data {
  readonly uid: string;
  readonly ref: DocumentReference;
}
