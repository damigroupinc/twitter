import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Echo} from 'laravel-echo-ionic';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  
    public strTitle: string = '';
    public strBody: string = '';
    public userData: any;
    public jscsrf: number;

    echo: any = null;
    data: any = [];
    database : Array<{
      title: string,
      body: string,
      created_at: string
    }> = [];
   
    public urlServer = 'http://192.241.159.78/api/';

    constructor(
        private http: HttpClient,
        public global: GlobalService,
    ){
        this.echo = new Echo({
            broadcaster: 'socket.io',
            host: '192.241.159.78:6001',
        });

        this.echo.connector.socket.on('connect', function () {
            console.log('CONNECTED');
        });

        this.echo.connector.socket.on('reconnecting', function () {
            console.log('CONNECTING');
        });

        this.echo.connector.socket.on('disconnect', function () {
            console.log('DISCONNECTED');
        });

        this.echo.channel('message-received')
            .listen('.message', (data) => {
                console.log(data);
                this.database.push({ 
                  title: data.title,
                  body: data.body,
                  created_at: data.created_at   
                });

             });
    }
    
    ngOnInit() {
      this.userData = this.global.getUser();
    }
    
    sendMessage (strBody: string, strToken: number) {
        let postData = {
            title: 'ionic |-> by Solus',
            body: strBody,
            token: strToken,
        };
        console.log('olha o parametro aqui: ' + postData);
        this.http.put(this.urlServer + "postMessage", postData).subscribe(
            (data) => {
                console.log('Approver Work Order was a success!');
            }, error => {
                console.log(error);
            }
        );
    }
}
