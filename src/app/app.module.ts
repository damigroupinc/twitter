import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { Crop } from '@ionic-native/crop/ngx';

import { File } from '@ionic-native/file/ngx';
import { AutosizeModule } from 'ngx-autosize';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgCalendarModule } from 'ionic2-calendar';
import { OneSignal } from '@ionic-native/onesignal/ngx';

import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    NgOtpInputModule,
    NgCalendarModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AutosizeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeGeocoder,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    OneSignal,
    Camera, Crop, File,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
