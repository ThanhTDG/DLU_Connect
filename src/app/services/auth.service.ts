import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from '@angular/fire/auth';
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
export class AuthService {
  currentUser: User;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage
  ) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  async register({ email, password }) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login({ email, password }) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    return await signOut(this.auth);
  }

  async sendVerify() {
    return await sendEmailVerification(this.auth.currentUser);
  }

  async resetPassword(email: string) {
    return await sendPasswordResetEmail(this.auth, email);
  }

  async reload() {
    return await this.auth.currentUser.reload();
  }

  getUserProfile() {
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return docData(userDocRef);
  }

  async setDefault() {
    const user = this.auth.currentUser;
    const name = user.email.split('@')[0];

    const path = 'default/avatar/avatar.png';
    const storageRef = ref(this.storage, path);
    const photoUrl = await getDownloadURL(storageRef);
    return await updateProfile(user, { displayName: name, photoURL: photoUrl });
  }

  async uploadPhoto(cameraFile: Photo) {
    const user = this.auth.currentUser;
    const path = `photos/${user.uid}/avatar.png`;
    const storageRef = ref(this.storage, path);

    await uploadString(storageRef, cameraFile.base64String, 'base64');
    const photoUrl = await getDownloadURL(storageRef);
    return await updateProfile(user, { photoURL: photoUrl });
  }

  async modifyName(name: string) {
    const user = this.auth.currentUser;
    return await updateProfile(user, { displayName: name });
  }
}
