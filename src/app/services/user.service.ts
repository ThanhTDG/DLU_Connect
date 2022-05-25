import { Injectable } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  getUserProfile(uid: string) {
    const userDocRef = doc(this.firestore, `users/${uid}`);
    return docData(userDocRef);
  }
}
