import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { InterfaceUsers } from '../interfaceusers';
import { Router } from '@angular/router';

import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  [x: string]: any;

  public dataUser: InterfaceUsers
  public username: string = '';
  public password: string = '';

  constructor(
    private toastController: ToastController,
    public http: HttpClient,
    public navCtrl: NavController,
    private router: Router,
    public global: GlobalService) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  register() {
    this.router.navigate(['/register']);
  }

  recover() {
    this.router.navigate(['/recover']);
  }

  goLogin() {
    this.goSearchUser();
  }

  goSearchUser() {
    let postData = {
      "email": '',
      "password": ''
    }
    postData.email = this.username;
    postData.password = this.password;
    console.log('ira fazer login com:', postData);
    this.http.post<InterfaceUsers>(this.global.urlServer + "auth/login", postData).
      subscribe(data => {
        this.dataUser = data; console.log('aqui o que retorna do login: ', data, this.global.urlServer);
        if (this.dataUser.id == 0) {
          this.global.presentToastGeneric('Sorry, wrong login! Plase try again!', 'danger');
        } else {
          let postData = {
            "id": this.dataUser.id,
            "username": this.dataUser.username,
            "classe": this.dataUser.classe,
            "sign": this.dataUser.sign,
          }
          this.global.saveUser(postData);
          this.global.presentToastGeneric('Login was successfull. Enjoy your app ', 'success');
          this.router.navigate(['/home']);
        }
      })
  }
}
