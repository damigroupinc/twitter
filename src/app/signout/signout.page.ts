import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';

import { Geolocation } from '@capacitor/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

import { GlobalService } from '../global.service';
import { InterfaceSign } from '../interfacesign';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.page.html',
  styleUrls: ['./signout.page.scss'],
})
export class SignoutPage implements OnInit {

  public postData: any;
  public userData: any;
  public username: string;
  public image: any;
  public id: any = 1;

  public name: string;
  public address: string;
  public confimAuth: string;
  public sign: string;
  public plt: any;

  public latitude: number;
  public longitude: number;

  constructor(
    public global: GlobalService,
    private nativeGeocoder: NativeGeocoder,
    private router: Router,
    public http: HttpClient,
    private navCtrl: NavController
  ) {
    this.plt = localStorage.getItem('platform');
    this.userData = this.global.getUser();
    this.getLocation();
  }

  ngOnInit() {
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(this.latitude, this.longitude, options)
      .then((result: NativeGeocoderResult[]) => console.log('estamos aqui com o address', JSON.stringify(result[0])))
      .catch((error: any) => console.log(error));
  }

  goBack() {
    this.navCtrl.back();
  }

  goSignout() {
    console.log(this.userData, ' signout ');
    this.postData = {
      "id": this.userData.id,
      "type": "2",
      "latitude": this.latitude,
      "longitude": this.longitude,
      "addressmap": this.address,
    }
    console.log(' antes de tudo ', this.postData);
    this.http.put<InterfaceSign>(this.global.urlServer + "sign", this.postData).
      subscribe(data => { })

    this.navCtrl.back();
  }
}



