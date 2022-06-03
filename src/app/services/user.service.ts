import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { User } from '../models/user';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends FirestoreService<User> {
  constructor(protected firestore: Firestore) {
    super(firestore, 'users');
  }

  protected override fromFirestore(data: any) {
    return new User(
      data.firstName,
      data.lastName,
      new Date(data.birthDate.seconds * 1000),
      data.sex
    );
  }
}
