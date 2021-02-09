import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
//import { InterfaceHistory } from '../interfacehistory';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  public listNotifications: any;
  public postData: any;
  public image: any;

  //public historyOrders: InterfaceHistory;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    public global: GlobalService
  ) { }

  ngOnInit() {
    this.listNotifications = [
      {
        'kind': 'Work Order',
        'text': 'Add Work Order',
        'class': 'LANDLORD',
        'date': '2/12/2020 2:46PM',
        'user': 'Emilio Dami LANDLORD',
        'status_landlord': '1',
        'status_tenant': '1'
      },
      { 'kind': 'Work Order', 'text': 'Add Work Order', 'class': 'TENANT', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '2' },
      { 'kind': 'Work Order', 'text': 'Add Comments to Work Order', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'LANDLORD', 'status': '3' },
      { 'kind': 'Work Order', 'text': 'Add Comments to Work Order', 'class': 'TENANT', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '4' },
      { 'kind': 'Work Order', 'text': 'Delete Work Order', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'LANDLORD', 'status': '1' },
      { 'kind': 'Work Order', 'text': 'Delete Work Order', 'class': 'TENANT', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '2' },
      { 'kind': 'Work Order', 'text': 'Work Order', 'class': 'TENANT', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '3' },
      { 'kind': 'Work Order', 'text': 'Start Work Order', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'LANDLORD', 'status': '4' },
      { 'kind': 'Work Order', 'text': 'Process Work Order', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '1' },
      { 'kind': 'Work Order', 'text': 'Closed Work Order', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '2' },
      { 'kind': 'Work Order', 'text': 'Approved Work Order', 'class': 'TENANT', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '3' },
      { 'kind': 'Payments', 'text': 'Payments Made', 'class': 'TENANT', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '4' },
      { 'kind': 'Move-in', 'text': 'Made Move-in', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '1' },
      { 'kind': 'Move-in', 'text': 'Made Move-in', 'class': 'TENANT', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '2' },
      { 'kind': 'Move-out', 'text': 'Made Move-out', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '3' },
      { 'kind': 'Move-out', 'text': 'Made Move-out', 'class': 'TENANT', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '4' },
      { 'kind': 'Contract', 'text': 'Made contract', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '1' },
      { 'kind': 'Unit', 'text': 'Add Unit', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '2' },
      { 'kind': 'Unit', 'text': 'Add TENANT to Unit', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '3' },
      { 'kind': 'Unit', 'text': 'Add Contract to Unit', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '4' },
      { 'kind': 'Unit', 'text': 'Add User', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '1' },
      { 'kind': 'Unit', 'text': 'Add Unit to User', 'class': 'LANDLORD', 'date': '2/12/2020 2:46PM', 'user': 'Emilio Dami Silva', 'status': '1' },
    ];

    this.postData = {
      id: 59
    };

    //  this.http.put<InterfaceHistory>(this.global.urlServer + 'historyOrders', this.postData).
    //    subscribe(data => { this.historyOrders = data; this.image = data[2].image, console.log(data) });
  }

  checkTenLan(kind: string) {
    console.log(kind);
    if (kind == 'LANDLORD') { return true }
    else {
      return false
    }
  }
}
