import { Injectable } from '@angular/core';
import {
  DocumentData,
  Firestore,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';
import { Page } from 'src/app/interfaces/page';
import { Profile } from 'src/app/interfaces/profile';
import { fromFirestore, getFollowable, toFirestore } from 'src/utils/converter';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class PageService extends FirestoreService<Page> {
  constructor(protected firestore: Firestore) {
    super(firestore);
    super.setCollection('pages');
  }

  protected fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: any
  ): Page {
    const val = fromFirestore(snapshot, options);
    const data = snapshot.data(options);
    const obj: Page = {
      ...val,
      user: null,
      name: data.name,
      description: data.description,
      photoUrl: data.photoUrl,
      backgroundUrl: data.backgroundUrl,
      createdDate: new Date(data.createdDate.seconds * 1000),
    };

    getFollowable(data.user).then((res) => {
      obj.user = res as Profile;
    });

    return obj;
  }

  protected toFirestore(data: Page) {
    const val = toFirestore(data);
    return {
      ...val,
      user: data.user?.ref,
      name: data.name,
      description: data.description,
      photoUrl: data.photoUrl,
      backgroundUrl: data.backgroundUrl,
      createdDate: data.createdDate,
    };
  }
}
