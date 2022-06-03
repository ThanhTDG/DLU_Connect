import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Group } from '../models/group';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class GroupService extends FirestoreService<Group> {
  constructor(protected firestore: Firestore) {
    super(firestore, 'groups');
  }

  protected override fromFirestore(data: any) {
    return new Group(data.userUid, data.pageUid, data.name, data.description);
  }
}
