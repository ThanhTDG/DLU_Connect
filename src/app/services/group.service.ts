import { Injectable } from '@angular/core';
import {
  DocumentData,
  Firestore,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';
import { Group } from '../interfaces/group';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class GroupService extends FirestoreService<Group> {
  constructor(
    protected firestore: Firestore,
    protected collectionName?: string
  ) {
    super(firestore, collectionName ?? 'groups');
  }

  protected fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: any
  ): Group {
    const data = snapshot.data(options);
    const obj: Group = {
      uid: snapshot.id,
      userUid: data.userUid,
      pageUid: data.pageUid,
      name: data.name,
      description: data.description,
    };
    return obj;
  }

  protected toFirestore(data: Group) {
    return Object.assign({}, data);
  }
}
