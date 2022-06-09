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
  QueryDocumentSnapshot,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export abstract class FirestoreService<T> {
  protected converter = {
    fromFirestore: this.fromFirestore,
    toFirestore: this.toFirestore,
  };

  protected collection: CollectionReference<T>;

  constructor(
    protected firestore: Firestore,
    protected collectionName?: string
  ) {
    this.collection = collection(firestore, collectionName).withConverter(
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

  protected doc(uid: string) {
    return doc(this.firestore, this.collectionName, uid).withConverter(
      this.converter
    );
  }

  protected abstract fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options?: any
  ): T;

  protected abstract toFirestore(data: T): any;
}
