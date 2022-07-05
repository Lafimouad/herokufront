import { Injectable } from '@angular/core';
import * as Keycloak from 'keycloak-js';
import jwt_decode from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config/config';



@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public kc : Keycloak.KeycloakInstance;
  public token : string ;
  public decode;
  public clientIdKeycloak ;

  public role : string;

  url = "10.255.255.30"

  test ;
  constructor(private httpClient : HttpClient) { }


  async init(){
    console.log('security initialisation !');
    this.kc= Keycloak({
      // url:"http://localhost:8080/auth",
    // url: Config.KEYCLOAK_URL+":8080/auth",



    //local
    // realm:"backOffice",
    // clientId:"angularAgent"

    //nidhal
    // realm:"test",
    // clientId:"client"


    //extern
    url:Config.KEYCLOAK_URL ,
    realm:"credit-workflow",
    clientId:"client"
    });

  await this.kc.init({
    onLoad:'login-required',
    //local
    redirectUri: 'http://localhost:4200/dashboard/default'

    //extern
    //redirectUri: 'http://52.156.203.158:80/'
  });


  this.clientIdKeycloak=this.kc.clientId;
  console.log(this.clientIdKeycloak);

  console.log(this.kc.token);


  this.decode=jwt_decode(this.kc.token);
  this.role = this.decode.resource_access.client.roles;
  // this.role = this.decode.resource_access.angularAgent.roles;


  // this.role = this.decode.realm_access.roles;
  this.test=this.role.toString();
  console.log("this user has role "+ this.test);

}



}

