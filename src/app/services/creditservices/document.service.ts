import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Config } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private httpClient : HttpClient ) { }

//pour les demandes  des crédit automobile
  listDocument(id : number){
    // return this.httpClient.get(`http://localhost:9010/getList/${id}`);
    return this.httpClient.get(Config.GESTION_DOCUMENT+`/getList/${id}`);
  }


  // pour les demandes des crédit renovation
  listDocumentRenovation(id : number){
    // return this.httpClient.get(`http://localhost:9010/getRenovationList/${id}`);
    return this.httpClient.get(Config.GESTION_DOCUMENT+`/getRenovationList/${id}`);
  }

// pour les demandes des crédit Foyer
  listDocumentFoyer(id : number){
    // return this.httpClient.get(`http://localhost:9010/getFoyerList/${id}`);
    return this.httpClient.get(Config.GESTION_DOCUMENT+`/getFoyerList/${id}`);
  }


  lastUpdateDocument(id : number){
    // return this.httpClient.get(`http://localhost:9010/getDate/${id}`);
    return this.httpClient.get(Config.GESTION_DOCUMENT+`/getDate/${id}`);
  }

  displayButton(id : number ){
    // return this.httpClient.get(`http://localhost:9010/getStatContrat/${id}`);
    return this.httpClient.get(Config.GESTION_DOCUMENT+`/getStatContrat/${id}`);
  }


}
