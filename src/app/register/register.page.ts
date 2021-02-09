import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { InterfaceUsers } from '../interfaceusers';
import { Router } from '@angular/router';

import { GlobalService } from '../global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  public dataUser: InterfaceUsers;
  public postData: any;
  public dataAux: any;

  public username: string = "";
  public password: string = "";
  public confirmpassword: string = "";
  public email: string = "";
  public phone: string = "";

  constructor(
    private toastController: ToastController,
    public navCtrl: NavController,
    private router: Router,
    public global: GlobalService,
    public http: HttpClient) { }

  goSignup() {
    if (this.confirmpassword == this.password) {
      this.postData = {
        username: this.username,
        password: this.password,
        email: this.email,
        phone: this.phone,
      };
      this.dataAux = {
        id: "",
        message: ""
      }
      this.http.put(this.global.urlServer + 'signup', this.postData).
        subscribe((data) => {
          this.dataAux = data; console.log(data); console.log(this.dataAux);
          if ((this.dataAux.id === 'email') || (this.dataAux.id === 'phone') ||
            (this.dataAux.id === 'username') || (this.dataAux.id === 0)) {
            this.global.presentToastGeneric(this.dataAux.message, 'danger');
          } else {
            console.log(' vamos para o login agora');
            this.goLogin();
          }
        })
    } else {
      this.global.presentToastGeneric('Login was successfull. Enjoy your app ', 'success');
    }
  }

  goLogin() {
    this.goSearchUser();
  }

  goSearchUser() {
    let postData = {
      "username": this.username,
      "password": this.password,
    }
    this.http.put<InterfaceUsers>(this.global.urlServer + "searchUser", postData).
      subscribe(data => {
        this.dataUser = data;
        if (this.dataUser.id == 0) {
          this.global.presentToastGeneric('Sorry, wrong login! Plase try again!', 'danger');
          this.router.navigateByUrl('/login');
        } else {
          let postData = {
            "id": this.dataUser.id,
            "username": this.dataUser.username,
            "classe": this.dataUser.classe,
            "status": this.dataUser.status,
            "email": this.dataUser.email,
            "phone": this.dataUser.phone,
          }
          this.saveUser(postData);
          this.global.presentToastGeneric('Login was successfull. Enjoy your app ', 'success');
          this.router.navigate(['/home']);
        }
      })
  }

  saveUser($postData: any) {
    localStorage.setItem('postLogin', JSON.stringify($postData));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('postLogin'));
  }

}