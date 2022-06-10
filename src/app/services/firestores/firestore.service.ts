import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  limit,
  orderBy,
  OrderByDirection,
  query,
  QueryDocumentSnapshot,
  updateDoc,
  where,
  WhereFilterOp,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export abstract class FirestoreService<T> {
  readonly converter = {
    fromFirestore: this.fromFirestore,
    toFirestore: this.toFirestore,
  };

  protected collection: CollectionReference<T>;

  constructor(
    protected firestore: Firestore,
    protected collectionPath: string
  ) {
    this.collection = collection(firestore, collectionPath).withConverter(
      this.converter
    );
  }

  async getAll() {
    return await getDocs(this.collection);
  }

  async get(uid: string) {
    const ref = this.doc(uid);
    return await getDoc(ref);
  }

  async add(data: T) {
    return await addDoc(this.collection, data);
  }

  async update(uid: string, data: any) {
    const ref = this.doc(uid);
    return await updateDoc(ref, data);
  }

  async delete(uid: string) {
    const ref = this.doc(uid);
    return await deleteDoc(ref);
  }

  async where(field: string, operator: WhereFilterOp, value: string) {
    const ref = this.collection;
    const q = query(ref, where(field, operator, value));
    return await getDocs(q);
  }

  async orderBy(field: string, direction: OrderByDirection) {
    const ref = this.collection;
    const q = query(ref, orderBy(field, direction));
    return await getDocs(q);
  }

  async limit(num: number) {
    const ref = this.collection;
    const q = query(ref, limit(num));
    return await getDocs(q);
  }

  doc(uid: string) {
    return doc(this.firestore, this.collectionPath, uid).withConverter(
      this.converter
    );
  }

  protected abstract fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options?: any
  ): T;

  protected abstract toFirestore(data: T): any;
}
