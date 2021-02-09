import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { GlobalService } from '../global.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage implements OnInit {

  public postData: any;
  public userData: any;
  public photo: string = '';
  public currentpassword: string = '';
  public newpassword: string = '';
  public confirmpassword: string = '';
   
  constructor(
    private toastController: ToastController,
    private router: Router,
    public global: GlobalService,  
    public http: HttpClient ) {}

  ngOnInit() {
    this.userData = this.getUser();
    console.log(this.userData);
  }
  
  ionViewDidEnter() {
    this.userData = this.getUser();
  }

  checkCurrentPassword(inputCurrent){
    console.log(this.userData.password);
    if (this.userData.password !== this.currentpassword) {
      this.presentToastErrorCurrentPassword();
      inputCurrent.setFocus();      
    }
  }
  
  checkConfirmPassword(inputnew) {
    if (this.newpassword !== this.confirmpassword) {
      this.presentToastErrorConfirmPassword();
      inputnew.setFocus();
    }
  }

  changePasswordUser() {
    if (this.userData.password !== this.currentpassword) {
      this.presentToastErrorCurrentPassword();     
    } else {
      if (this.newpassword !== this.confirmpassword) {
        this.presentToastErrorConfirmPassword();     
      } else {
        this.postData = {
          id_user: this.userData.id,
          newpassord: this.newpassword
        };               
        this.http.put(this.global.urlServer + 'changePassword', this.postData).subscribe((data) => { 
          console.log('Starter Order was a success!'); 
          this.saveNovoLogin(); 
          this.presentToastOk();
          this.router.navigateByUrl('/home');      
        }, error => {
          this.presentToastError();
          console.log(error);
        }
      )}
    }
  }
  
  saveNovoLogin() {
    this.postData = {
      id_user: this.userData.id,
      newpassord: this.newpassword
    };                      
    this.http.put(this.global.urlServer + 'changePassword', this.postData).subscribe((data) => { 
      console.log('Starter Order was a success!');  
      let postData = {
        "id": this.userData.id,
        "name": this.userData.username,
        "classe": this.userData.classe,
        "id_classe": this.userData.id_classe,
        "password": this.newpassword,
        "status": this.userData.status
      }
      this.saveUser(postData);
    });
  }       
  
  presentToastErrorCurrentPassword() {
    this.global.showToastWarning('Warning', 'Please, insert correct current password!');
  }
  
  presentToastErrorConfirmPassword() {
    this.global.showToastWarning('warning', 'Please, confirm new passoword!');
  }

  presentToastOk() {
    this.global.showToastSuccess('Success', "It's ok. The new password saved!");
  }

  presentToastError() {
    this.global.showToastError('Error', "Please make sure you're connected to the internet and try again.");
  }
  
  saveUser($postData: any) {
    localStorage.setItem('postLogin', JSON.stringify($postData));
  }

  getUser() {         
    return JSON.parse(localStorage.getItem('postLogin'));
  }

}