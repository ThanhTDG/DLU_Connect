import { Injectable } from '@angular/core';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { Comment } from 'src/app/interfaces/comment';
import { getFollowable } from 'src/utils/converter';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class CommentService extends FirestoreService<Comment> {
  constructor(protected firestore: Firestore) {
    super(firestore);
  }

  async add(data: Comment) {
    const val = await super.add(data);
    const service = new CommentService(this.firestore);
    service.setCollection(`${val.path}/comments`);
    data.comments.forEach(async (value) => {
      await service.add(value);
    });
    return val;
  }

  protected fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: any
  ): Comment {
    const data = snapshot.data(options);
    const obj: Comment = {
      uid: snapshot.id,
      ref: snapshot.ref,
      author: null,
      content: data.content,
      images: [],
      createdDate: new Date(data.createdDate?.seconds * 1000),
      comments: [],
    };

    getFollowable(data.author).then((res) => {
      obj.author = res;
    });

    const service = new CommentService(getFirestore());
    service.setCollection(`${obj.ref.path}/comments`);
    service.getAll().then((res) => {
      obj.comments = res.docs.map((val) => val.data());
    });

    return obj;
  }

  protected toFirestore(data: Comment) {
    return {
      author: data.author?.ref,
      content: data.content,
      images: data.images,
      createdDate: data.createdDate,
    };
  }
}
