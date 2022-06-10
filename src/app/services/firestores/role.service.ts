import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { Role } from 'src/app/interfaces/role';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends FirestoreService<Role> {
  constructor(protected firestore: Firestore) {
    super(firestore, 'roles');
  }

  protected fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: any
  ): Role {
    const data = snapshot.data(options);
    const obj: Role = {
      uid: snapshot.id,
      ref: snapshot.ref,
      name: data.name,
      description: data.description,
    };
    return obj;
  }

  protected toFirestore(data: Role) {
    return {
      name: data.name,
      description: data.description,
    };
  }
}
