import { Injectable } from '@angular/core';
import {
  DocumentData,
  Firestore,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';
import { Group } from 'src/app/interfaces/group';
import { getFollowable } from 'src/utils/converter';
import { FirestoreService } from './firestore.service';
import { PostService } from './post.service';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root',
})
export class GroupService extends FirestoreService<Group> {
  constructor(protected firestore: Firestore) {
    super(firestore);
    super.setCollection('groups');
  }

  protected fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: any
  ): Group {
    const data = snapshot.data(options);
    const obj: Group = {
      uid: snapshot.id,
      ref: snapshot.ref,
      owner: null,
      name: data.name,
      description: data.description,
      photoUrl: data.photoUrl,
      backgroundUrl: data.backgroundUrl,
      createdDate: new Date(data.createdDate?.seconds * 1000),
      members: [],
      posts: [],
    };

    getFollowable(data.owner).then((res) => {
      obj.owner = res;
    });

    const roleSv = new RoleService(this.firestore);
    data.members.forEach((value: any) => {
      getFollowable(value.member).then((member) => {
        roleSv.get(value.role.id).then((role) => {
          obj.members.push({
            member,
            role: role.data(),
          });
        });
      });
    });

    const postSv = new PostService(this.firestore);
    data.posts.forEach((value: any) => {
      postSv.get(value.id).then((res) => {
        obj.posts.push(res.data());
      });
    });

    return obj;
  }

  protected toFirestore(data: Group) {
    return {
      owner: data.owner?.ref,
      name: data.name,
      desciption: data.description,
      photoUrl: data.photoUrl,
      backgroundUrl: data.backgroundUrl,
      createdDate: data.createdDate,
      members: data.members.map((x) => ({
        member: x.member.ref,
        role: x.role.ref,
      })),
      posts: data.posts.map((x) => x.ref),
    };
  }
}
