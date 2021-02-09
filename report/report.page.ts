import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { GlobalService } from '../global.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {


  public service: any;
  public id: any = 1;//date_time_random(0,9)


  public date_start: any = 0;
  public time_start: any = 0;
  public date_end: any = 0;
  public time_end: any = 0;

  public pets: any = 1;
  public baths: any = 1;
  public beds: any = 1;
  public frequence: any = 1;
  public windows: any = 1;
  public fridges: any = 1;
  public ovens: any = 1;
  public laundrys: any = 1;
  public clearners: any = 1;
  public materials: any = "No";
  public requirement: any = "";
  public booking: any;
  public plt: any;




  constructor(
    public global: GlobalService,
    private router: Router,
    private navCtrl: NavController
  ) {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
    this.booking = this.global.getBooking();

    this.date_start = this.booking.date_start;
    this.time_start = this.booking.time_start;
    this.date_end = this.booking.date_end;
    this.time_end = this.booking.time_end;

    this.pets = this.booking.pets;
    this.baths = this.booking.baths;
    this.beds = this.booking.beds;
    this.frequence = this.booking.frequence;
    this.windows = this.booking.windows;
    this.fridges = this.booking.fridges;
    this.ovens = this.booking.ovens
    this.laundrys = this.booking.laundrys;
    this.clearners = this.booking.clearners;
    this.materials = this.booking.materials;
    this.requirement = this.booking.requirement;

    console.log(' Extras: ', 'Pets: ', this.pets, 'Baths: ', this.baths, 'Beds: ', this.beds, 'frequence: ', this.frequence);
    console.log('Windows: ', this.windows, 'Laundrys: ', this.laundrys, 'Ovens: ', this.ovens, 'Fridges: ', this.fridges);
    console.log(' clearners: ', this.clearners, 'Materials: ', this.materials, 'requirement: ', this.requirement);
    console.log(' Booking: ', this.booking);

  }


  goToCleaningDetail2() {
    let postData = {
      "id": this.id,
      "service": this.service,
      "date_start": this.date_start,
      "time_start": this.time_start,
      "date_end": this.date_end,
      "time_end": this.time_end,
      "baths": this.baths,
      "beds": this.beds,
      "pets": this.pets,
      "frequence": this.frequence,
      "windows": this.windows,
      "fridges": this.fridges,
      "laundrys": this.laundrys,
      "ovens": this.ovens,
      "clearners": this.clearners,
      "materials": this.materials,
      "requirement": this.requirement
    }
    this.global.saveBooking(postData);
    this.router.navigate(['/report']);
  }

  goBack() {

    console.log(' aqui quanto faz goback():', this.frequence);
    this.navCtrl.back();
  }

  choosefrequence(val: any) {
    this.frequence = val;
    console.log(' aqui quanto faz choosefrequence:', this.frequence);
  }


}



