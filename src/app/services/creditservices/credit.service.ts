import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Credit } from 'src/app/models/credit.model';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  creditSubject =new Subject<any[]>();


  private credits : Credit[] =[
  {id: 1,
  nom: 'radhwen',
  prenom: 'sassi',
  demandeCredit:{
      type:'foyer',
      montant: 20000,
      listDocument:'les document de cette demande',
      dureeRemboursement: 12,
      autoFinancement:1000,
      ageVoiture:null,
      prixVoiture:null,
      puissanceFiscal:null
    }},
  {id: 2,
  nom: 'assil',
  prenom: 'jabber',
  demandeCredit:{
      type:'auto',
      montant: 5000 ,
      listDocument:'les document de cette demande assil',
      dureeRemboursement: 20,
      autoFinancement:2000,
      ageVoiture:5,
      prixVoiture:20000,
      puissanceFiscal:12
  } },
  ]

  emitCredit(){
    this.creditSubject.next(this.credits.slice());
  }


  constructor() { }



  getCreditById(id : number){
    var credit = this.credits.find(
      (creditObject)=>{
        return creditObject.id === id;
      }
    );
    return credit;
  }


  deleteCreditById(id : number){
    var credit = this.getCreditById(id);
    var index = this.credits.indexOf(credit);
    this.credits.splice(index, 1);
    this.emitCredit();

  }




}
