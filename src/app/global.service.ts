import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public userData: any;
  public urlServer = 'http://192.241.159.78/api/';
  public urlServerJSON = "assets/langs/";
  public version = '0.0.01-Android'
  public name = 'Makesignin.com';
  public company = 'Group Dami Inc';
  public published = '10/11/2020 9:53 PM US';
  public website = 'makesigin.com';
  public photo = '';
  public language = 'enus';

  constructor(

    private http: HttpClient,
    private router: Router,
    private toastController: ToastController) { }

  presentToastGeneric(strMsg: string, strColor: string) {
    if (strColor == 'Red') {
      this.showToastError('Error', strMsg);
    } else if (strColor == 'Green') {
      this.showToastSuccess('Success', strMsg);
    } else if (strColor == 'Yellow') {
      this.showToastWarning('Error', strMsg);
    } else
      this.showToastSuccess('Success', strMsg);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('postLogin'));
  }

  saveUser($postData: any) {
    localStorage.setItem('postLogin', JSON.stringify($postData));

  }

  saveBooking(postData: any) {
    localStorage.setItem('postBooking', JSON.stringify(postData));
    console.log('olha aqui gravando:', postData)
  }

  getBooking() {
    console.log(JSON.parse(localStorage.getItem('postBooking')));
    return JSON.parse(localStorage.getItem('postBooking'));
  }

  showToastSuccess(strTipo, strMsg: string) {
    this.toastController.create({
      header: strTipo,
      message: strMsg,
      position: 'middle',
      cssClass: ' toast-custom-class-success',
      buttons: [
        {
          side: 'end',
          icon: 'checkmark-circle-outline',
          text: '',
          handler: () => {
            console.log(strMsg, 'Clicou aqui');
          }

        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }

  showToastWarning(strTipo: string, strMsg: string) {
    this.toastController.create({
      header: strTipo,
      message: strMsg,
      position: 'middle',
      cssClass: 'toast-custom-class-warning',
      buttons: [
        {
          side: 'end',
          icon: 'warning',
          text: strMsg,
          handler: () => {
            console.log(strMsg, 'Clicou aqui');
          }
        }, {
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          }
        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }

  showToastError(strTipo: string, strMsg: string) {
    this.toastController.create({
      header: strTipo,
      message: strMsg,
      position: 'middle',
      cssClass: ' toast-custom-class-error',
      buttons: [
        {
          side: 'end',
          icon: 'stop',
          text: strMsg,
          handler: () => {
            console.log(strMsg, 'Clicou aqui');
          }
        }, {
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          }
        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }



}