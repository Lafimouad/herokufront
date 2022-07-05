import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private httpClient : HttpClient) { }


  sendMail(){
    return this.httpClient.get('http://10.255.255.30:9009/sendEmailAcceptation');
  }
}
