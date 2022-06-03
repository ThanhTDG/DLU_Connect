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
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export abstract class FirestoreService<T> {
  protected converter = {
    fromFirestore: (snapshot: any, options?: any) => {
      const data = snapshot.data(options);
      return this.fromFirestore(data);
    },
    toFirestore: this.toFirestore,
  };

  private collection: CollectionReference<T>;

  constructor(protected firestore: Firestore, private collectionName: string) {
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

  protected fromFirestore(data: any) {
    return { ...data } as T;
  }

  protected toFirestore(data: T) {
    return Object.assign({}, data);
  }

  private doc(uid: string) {
    return doc(this.firestore, this.collectionName, uid).withConverter(
      this.converter
    );
  }
}
