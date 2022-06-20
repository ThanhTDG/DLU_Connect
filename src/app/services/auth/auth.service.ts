import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInAnonymously,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from '../firestores/profile.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: User;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage,
    private profile: ProfileService
  ) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
    signInAnonymously(auth);
    signInWithCustomToken(auth, '1234');
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
    return await sendEmailVerification(this.currentUser);
  }

  async resetPassword(email: string) {
    return await sendPasswordResetEmail(this.auth, email);
  }

  isVerified(callback: (user?: User) => void) {
    this.auth.onAuthStateChanged((user) => {
      if (user?.emailVerified) {
        callback(user);
      }
    });
  }

  async reload() {
    return await this.currentUser?.reload();
  }

  async setDefault() {
    const user = this.currentUser;
    const name = user.email.split('@')[0];

    const path = 'default/avatar/avatar.png';
    const storageRef = ref(this.storage, path);
    const photoUrl = await getDownloadURL(storageRef);

    await updateProfile(user, { displayName: name, photoURL: photoUrl });

    const obj: Profile = {
      uid: user.uid,
      ref: null,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      firstName: null,
      lastName: null,
      birthdate: new Date(),
      gender: 'U',
      backgroundUrl: null,
      friends: [],
      followers: [],
      following: [],
    };
    await this.profile.setProfile(obj);
  }

  async uploadPhoto(cameraFile: Photo) {
    const user = this.currentUser;
    const path = `photos/${user.uid}/avatar.png`;
    const storageRef = ref(this.storage, path);

    await uploadString(storageRef, cameraFile.base64String, 'base64');
    const photoUrl = await getDownloadURL(storageRef);
    await updateProfile(user, { photoURL: photoUrl });

    await this.profile.update(user.uid, { photoUrl });
  }

  async modifyName(name: string) {
    const user = this.currentUser;
    await updateProfile(user, { displayName: name });

    await this.profile.update(user.uid, { displayName: name });
  }
}
