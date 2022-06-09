import { Injectable } from '@angular/core';
import {
  DocumentData,
  Firestore,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';
import { Profile } from '../interfaces/profile';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends FirestoreService<Profile> {
  constructor(
    protected firestore: Firestore,
    protected collectionName?: string
  ) {
    super(firestore, collectionName ?? 'users');
  }

  protected fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: any
  ): Profile {
    const data = snapshot.data(options);
    const obj: Profile = {
      uid: snapshot.id,
      firstName: data.firstName,
      lastName: data.lastName,
      birthdate: new Date(data.birthdate.seconds * 1000),
      gender: data.gender,
      backgroundUrl: data.backgroundUrl,
    };
    return obj;
  }

  protected toFirestore(data: Profile) {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      birthdate: data.birthdate,
      gender: data.gender,
      backgroundUrl: data.backgroundUrl,
    };
  }
}
