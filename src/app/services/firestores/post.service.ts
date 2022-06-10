import { Injectable } from '@angular/core';
import {
  DocumentData,
  Firestore,
  getFirestore,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';
import { Post } from 'src/app/interfaces/post';
import { getFollowable } from 'src/utils/converter';
import { CommentService } from './comment.service';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class PostService extends FirestoreService<Post> {
  constructor(protected firestore: Firestore) {
    super(firestore, 'posts');
  }

  async add(data: Post) {
    const val = await super.add(data);
    const service = new CommentService(this.firestore, `${val.path}/comments`);
    data.comments.forEach(async (value) => {
      await service.add(value);
    });
    return val;
  }

  protected fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: any
  ): Post {
    const data = snapshot.data(options);
    const obj: Post = {
      uid: snapshot.id,
      ref: snapshot.ref,
      author: null,
      content: data.content,
      images: [],
      updatedDate: new Date(data.updatedDate?.seconds * 1000),
      createdDate: new Date(data.createdDate?.seconds * 1000),
      comments: [],
    };

    getFollowable(data.author).then((res) => {
      obj.author = res;
    });

    new CommentService(getFirestore(), `${obj.ref.path}/comments`)
      .getAll()
      .then((res) => {
        obj.comments = res.docs.map((val) => val.data());
      });

    return obj;
  }

  protected toFirestore(data: Post) {
    return {
      author: data.author?.ref,
      content: data.content,
      images: data.images,
      updatedDate: data.updatedDate,
      createdDate: data.createdDate,
    };
  }
}
