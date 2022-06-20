import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  Auth,
  connectAuthEmulator,
  getAuth,
  indexedDBLocalPersistence,
  initializeAuth,
  provideAuth,
} from '@angular/fire/auth';
import {
  connectFirestoreEmulator,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';
import {
  connectStorageEmulator,
  getStorage,
  provideStorage,
} from '@angular/fire/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NativePageTransitions } from '@awesome-cordova-plugins/native-page-transitions/ngx';
import { FormsModule } from '@angular/forms';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Capacitor } from '@capacitor/core';

import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CameraPreview } from '@awesome-cordova-plugins/camera-preview/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      let auth: Auth;
      if (Capacitor.isNativePlatform()) {
        auth = initializeAuth(getApp(), {
          persistence: indexedDBLocalPersistence,
        });
      } else {
        auth = getAuth();
      }
      // if (!environment.production) {
      //   connectAuthEmulator(auth, 'http://localhost:9099', {
      //     disableWarnings: true,
      //   });
      // }
      return auth;
    }),
    provideFirestore(() => {
      const firestore = getFirestore();
      // if (!environment.production) {
      //   connectFirestoreEmulator(firestore, 'localhost', 8080);
      // }
      return firestore;
    }),
    provideStorage(() => {
      const storage = getStorage();
      // if (!environment.production) {
      //   connectStorageEmulator(storage, 'localhost', 9199);
      // }
      return storage;
    }),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativePageTransitions,
    Camera,
    AuthService,
    CameraPreview,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
