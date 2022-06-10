import {
  DocumentData,
  DocumentReference,
  getFirestore,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';
import { Followable } from 'src/app/interfaces/followable';
import { PageService } from 'src/app/services/firestores/page.service';
import { ProfileService } from 'src/app/services/firestores/profile.service';

export const fromFirestore = (
  snapshot: QueryDocumentSnapshot<DocumentData>,
  options?: any
) => {
  const data = snapshot.data(options);
  const obj: Followable = {
    uid: snapshot.id,
    ref: snapshot.ref,
    friends: [],
    followers: [],
    following: [],
  };

  data.friends.forEach(async (value: any) => {
    await getFollowable(value).then((res) => {
      obj.friends.push(res);
    });
  });

  data.followers.forEach(async (value: any) => {
    await getFollowable(value).then((res) => {
      obj.followers.push(res);
    });
  });

  data.following.forEach(async (value: any) => {
    await getFollowable(value).then((res) => {
      obj.following.push(res);
    });
  });

  return obj;
};

export const toFirestore = (data: Followable) => ({
  friends: data.friends.map((x) => x.ref),
  followers: data.followers.map((x) => x.ref),
  following: data.following.map((x) => x.ref),
});

export const getFollowable = async (ref: DocumentReference) => {
  switch (ref.parent.id) {
    case 'profiles':
      return (await new ProfileService(getFirestore()).get(ref.id)).data();

    case 'pages':
      return (await new PageService(getFirestore()).get(ref.id)).data();

    default:
      return null;
  }
};
