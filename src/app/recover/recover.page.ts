import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { GlobalService } from '../global.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {

  public postData: any;
  public userData: any;
  public email: any;

  constructor(
    private toastController: ToastController,
    private router: Router,
    public global: GlobalService,
    public http: HttpClient) { }

  ngOnInit() {
    this.userData = this.getUser();
  }

  goLogin() {

  }

  sendEmailChangePassword() {
    this.postData = {
      email: this.email
    };
    this.http.put(this.global.urlServer + 'searchPassword', this.postData).subscribe((data) => {
      this.presentToastOk();
      this.router.navigateByUrl('/login');
    }, error => {
      this.presentToastError();
    });
  }


  presentToastOk() {
    this.global.showToastSuccess( 'Success!',
      "It's ok. The password sended for email!");
  }

  presentToastError() {
    this.global.showToastError( 'ERROR!',
      "Please make sure you're connected to the internet and try again.");
  }

  getUser() {
    return JSON.parse(localStorage.getItem('postLogin'));
  }

}