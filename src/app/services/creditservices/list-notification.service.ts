import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as EventEmitter from 'events';
import { Observable, Subject } from 'rxjs';
import { subscribeOn, switchMap } from 'rxjs/operators';
import { Config } from 'src/app/config/config';
import { Credit } from 'src/app/models/credit.model';

import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class ListNotificationService {
  creditTraiter:Credit=null;
  listNotif ;
  nomberNotif:number=0;

listNotifEmit = new Subject();

  constructor(private httpClient : HttpClient , private keycloakSecurity : KeycloakSecurityService) { }

  listNotification(){
    let headers = new HttpHeaders({'Authorization':`Bearer ${this.keycloakSecurity.kc.token}`})
    // return this.httpClient.get('http://10.255.255.30:9002/getNewNoteCreditByRole',{headers:headers});

    return this.httpClient.get(Config.GESTION_CREDIT+'/getNewNoteCreditByRole',{headers:headers});
  }

  updateListNotif(id : number){
    // return this.httpClient.put(`http://10.255.255.30:9002/ouvrirNotif/${id}` , null);

    return this.httpClient.put(Config.GESTION_CREDIT+`/ouvrirNotif/${id}` , null);
  }

  numberNotif():Observable<number>{
    let headers = new HttpHeaders({'Authorization':`Bearer ${this.keycloakSecurity.kc.token}`})
    // this.httpClient.get('http://10.255.255.30:9002/getNewNoteCreditByRole',{headers:headers}).subscribe(
    //   (res : any[]) => {
    //     this.listNotif = res ;
    //   }
    // );
    // return this.listNotif.lenght();


    this.httpClient.get(Config.GESTION_CREDIT+'/getNewNoteCreditByRole',{headers:headers}).subscribe(
      (res : any[]) => {
        this.listNotif = res ;
      }
    );
    return this.listNotif.lenght();
  }



  listNotif$():Observable<any[]>{
    let headers = new HttpHeaders({'Authorization':`Bearer ${this.keycloakSecurity.kc.token}`})
    // return this.httpClient.get<any[]>('http://10.255.255.30:9002/getNewNoteCreditByRole',{headers:headers});

    return this.httpClient.get<any[]>(Config.GESTION_CREDIT+'/getNewNoteCreditByRole',{headers:headers});
  }

  updateNotifObs(id : Observable<number>){
    // return this.httpClient.put(`http://10.255.255.30:9002/ouvrirNotif/${id}` , null);

    return this.httpClient.put(Config.GESTION_CREDIT+`/ouvrirNotif/${id}` , null);
  }
  // updateNotification(){
  //   return


  // }
  getnotification(){
    this.listNotif$().subscribe(
      (res : any[]) => {
        this.listNotif = res ;


        this.nomberNotif = this.listNotif.length;
        console.log('notif from service ', this.listNotif);


      },
      (error) => {
        console.log(error);
      }
    )
  }
}
