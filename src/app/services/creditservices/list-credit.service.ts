import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { Config } from 'src/app/config/config';
import { Commentaire } from 'src/app/models/commentaire';
import { NoteCredit } from 'src/app/models/note-credit';


import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class ListCreditService {


  public listeNoteSubject = new Subject<NoteCredit[]>();
  public listNote : NoteCredit []=[];


  public listNoterTraitSubject = new Subject<NoteCredit[]>();

  public listNoterTrait : NoteCredit []=[];
  constructor(private httpClient : HttpClient , private keycloakSecurity : KeycloakSecurityService) { }



  private _refresh$ = new Subject<void>();

  get refresh(){
    return this._refresh$;
  }

  emmitListNoteSubject(){
    this.listeNoteSubject.next(this.listNote.slice());
  }

  // getAllNote(){
  //   return this.httpClient.get<any>("http://10.255.255.30:9002/NoteCreditDirecteurZone").subscribe(
  //     (response) => {
  //       this.listeCredit=response;
  //       console.log("table of result ",response);
  //       this.emmitListCreditSubject();
  //     },
  //     (error)=>{
  //       console.log("error :"+error);

  //     }
  //   );
  // }



  getAllNoteWithToken(){
    let headers = new HttpHeaders({'Authorization':`Bearer ${this.keycloakSecurity.kc.token}`})
    console.log('retrieving client with headers',headers);

    // return this.httpClient.get<any[]>('http://10.255.255.30:9002/getNoteCreditByRole',{headers:headers}).subscribe(
    //   (response) => {
    //       this.listNote=response;
    //       this.emmitListNoteSubject();
    //   },
    //   (error)=> {
    //     console.log('error :'+error);

    //   }
    // )

    return this.httpClient.get<any[]>(Config.GESTION_CREDIT+'/getNoteCreditByRole',{headers:headers}).subscribe(
      (response) => {
          this.listNote=response;
          this.emmitListNoteSubject();
      },
      (error)=> {
        console.log('error :'+error);

      }
    )
  }


  getNoteCreditById(id : number){
    var noteCredit = this.listNote.find(
      (noteCreditObject)=>{
        return noteCreditObject.id===id;
      }
    );

    return noteCredit;
  }



  ajouterAvisAgent(id : Number , commentaire : Commentaire ){
    // return this.httpClient.post(`http://10.255.255.30:9002/ValiderNotecredit/${id}`,commentaire);

    return this.httpClient.post(Config.GESTION_CREDIT+`/ValiderNotecredit/${id}`,commentaire);
  }



  // emitCommentaire(){
  //   this.commentSubject.next(this.commentaire.slice());
  // }

  getCommentaireNoteCredit(id : Number){
    // return this.httpClient.get<any>(`http://10.255.255.30:9002/getCommentaire/${id}`);

    return this.httpClient.get<any>(Config.GESTION_CREDIT+`/getCommentaire/${id}`);
  }



  emitlistNoteTrait(){
    this.listNoterTraitSubject.next(this.listNoterTrait.slice());
  }


  getListNotreCreditTait(){
    let headers = new HttpHeaders({'Authorization':`Bearer ${this.keycloakSecurity.kc.token}`});
    // this.httpClient.get<any[]>('http://10.255.255.30:9002/getNoteCreditByRoleDejaTraier',{headers:headers}).subscribe(
    //   response =>{
    //     this.listNoterTrait= response;
    //     this.emitlistNoteTrait();
    //   },(error)=> {
    //     console.log('error :'+error);

    //   }
    // );

    this.httpClient.get<any[]>(Config.GESTION_CREDIT+'/getNoteCreditByRoleDejaTraier',{headers:headers}).subscribe(
      response =>{
        this.listNoterTrait= response;
        this.emitlistNoteTrait();
      },(error)=> {
        console.log('error :'+error);

      }
    );
  }



  getListDocument(id : number){
    // return this.httpClient.get(Config.API_ADDRESS+`:9010/getfile/${id}`);
    return this.httpClient.get(Config.GESTION_DOCUMENT+`/getfile/${id}`);
  }


  getAllDemandeValidfinal(){
    // return this.httpClient.get('http://10.255.255.30:9002/GetCreditAccepter');

    return this.httpClient.get(Config.GESTION_CREDIT+'/GetCreditAccepter');
  }



  getNoteCreditByIdApi(id : number){
    // return this.httpClient.get(`http://10.255.255.30:9002/getNoteByid/${id}`);

    return this.httpClient.get(Config.GESTION_CREDIT+`/getNoteByid/${id}`);
  }

  updateNoteCredit(idnoteCredit : Number , commentaire : Commentaire ,){
    let headers = new HttpHeaders({'Authorization':`Bearer ${this.keycloakSecurity.kc.token}`});
    // return this.httpClient.put(`http://10.255.255.30:9002/MiseAJourNoteCredit/${idnoteCredit}`,commentaire ,{headers:headers });


    return this.httpClient.put(Config.GESTION_CREDIT+`/MiseAJourNoteCredit/${idnoteCredit}`,commentaire ,{headers:headers });
  }

  // getIdDemandeCredit(id : number){
  //   return this.httpClient.get(`http://10.255.255.30:9002/getNoteByid/${id}`).pipe(
  //     map(note => note.filter(i => i.id === id))
  //   );

  //  }







}
