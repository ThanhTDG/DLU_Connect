import { Injectable } from '@angular/core';
import {
  DocumentData,
  Firestore,
  QueryDocumentSnapshot,
  setDoc,
} from '@angular/fire/firestore';
import { Profile } from 'src/app/interfaces/profile';
import { fromFirestore, toFirestore } from 'src/utils/converter';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends FirestoreService<Profile> {
  constructor(protected firestore: Firestore) {
    super(firestore, 'profiles');
  }

  async setProfile(data: Profile) {
    const ref = this.doc(data.uid);
    return await setDoc(ref, data);
  }

  protected fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: any
  ): Profile {
    const val = fromFirestore(snapshot, options);
    const data = snapshot.data(options);

    const obj: Profile = {
      ...val,
      email: data.email,
      emailVerified: data.emailVerified,
      displayName: data.displayName,
      photoUrl: data.photoUrl,
      firstName: data.firstName,
      lastName: data.lastName,
      birthdate: new Date(data.birthdate?.seconds * 1000),
      gender: data.gender,
      backgroundUrl: data.backgroundUrl,
    };
    return obj;
  }

  protected toFirestore(data: Profile) {
    const val = toFirestore(data);
    return {
      ...val,
      email: data.email,
      emailVerified: data.emailVerified,
      displayName: data.displayName,
      photoUrl: data.photoUrl,
      firstName: data.firstName,
      lastName: data.lastName,
      birthdate: data.birthdate,
      gender: data.gender,
      backgroundUrl: data.backgroundUrl,
    };
  }
}
