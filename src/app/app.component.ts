import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [

    {
      title: 'Messages',
      url: '/messages',
      icon: 'mail-open'
    },

  ];

  dark = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient,
    private router: Router,
    public global: GlobalService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goProfile() {
    this.router.navigate(['/profile']);
  };
  goChangePassword() {
    this.router.navigate(['/recover']);
  };
  goTutorial() {
    this.router.navigate(['/tutorial']);
  };
  goAbout() {
    this.router.navigate(['/about']);
  };
  goRecover() {
    this.router.navigate(['/recover']);
  };
  goLogout() {
    this.router.navigate(['/login']);
  };

}
