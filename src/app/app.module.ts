import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NativePageTransitions} from '@awesome-cordova-plugins/native-page-transitions/ngx';
import { FormsModule } from '@angular/forms';
import { Camera} from '@awesome-cordova-plugins/camera/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},NativePageTransitions, Camera],
  bootstrap: [AppComponent],
})
export class AppModule {}
