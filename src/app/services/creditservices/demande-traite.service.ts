import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { demandeDirecteurZone } from 'src/app/models/demandeDirecteurZone.model';
import { demandeTraite } from 'src/app/models/demandeTraite.model';


@Injectable({
  providedIn: 'root'
})
export class DemandeTraiteService {

  demandeTsubject = new Subject<demandeTraite[]>() ;



  private demandesTraite : demandeTraite[]=[
    {id:1,
      nom : 'rihan' ,
      prenom : 'nidhal' ,
      demandeCredit :{
                type : 'foyer' ,
                montant : 5000 ,
                listDocument: 'list documents ici',
                dureeRemboursement: 12,
                ageVoiture:null,
                prixVoiture:null,
                puissanceFiscal:null,
                autoFinancement:1200,
              },
    descriptionCredit:"test test avis de chef d'agence",
    statut:'Validé'
    },
    {id:2,
      nom : 'hsini' ,
      prenom : 'ahmed' ,
      demandeCredit :{
                type : 'auto' ,
                montant : 40000 ,
                listDocument: 'list documents ici',
                dureeRemboursement: 24,
                ageVoiture:null,
                prixVoiture:null,
                puissanceFiscal:null,
                autoFinancement:1000,
              },
    descriptionCredit:'test test',
    statut:'Non validé'
    },
    ];

  emitDemandeSubject(){
    this.demandeTsubject.next(this.demandesTraite.slice());
  }


  demandeDirecteurZoneSubject = new Subject<demandeDirecteurZone[]>();
  private demandesDirecteurZoneT : demandeDirecteurZone[]=[
    {demande : { id:null,
      nom : null ,
      prenom : null ,
      demandeCredit :{
                type : null ,
                montant : null ,
                listDocument: null,
                dureeRemboursement: null,
                ageVoiture:null,
                prixVoiture:null,
                puissanceFiscal:null,
                autoFinancement:null,
              },
    descriptionCredit:null,
    statut:null
    },
    discriptionDirecteurZone:null,
    statut:null,


    },
  ];

  emitDemandeDirecteurZoneTSubject(){
    this.demandeDirecteurZoneSubject.next(this.demandesDirecteurZoneT.slice());

  }


  constructor() { }


  // addDemandeT(demande : demandeTraite){
  //   this.demandesTraite.push(demande);
  //   this.emitDemandeT();
  // }

  triaterDemande (demande :demandeTraite){
    const demandetObject : demandeTraite = {
      id:0,
      nom : '' ,
      prenom : '' ,
      demandeCredit :{
                type : '' ,
                montant : 0 ,
                listDocument: '',
                dureeRemboursement: 0,
                ageVoiture:null,
                prixVoiture:null,
                puissanceFiscal:null,
                autoFinancement:null,
              },
    descriptionCredit:'',
    statut:''
    };
    demandetObject.id=this.demandesTraite[(this.demandesTraite.length-1)].id+1;
    demandetObject.nom=demande.nom;
    demandetObject.prenom=demande.prenom;
    demandetObject.demandeCredit.type=demande.demandeCredit.type;
    demandetObject.demandeCredit.montant=demande.demandeCredit.montant;
    demandetObject.demandeCredit.listDocument=demande.demandeCredit.listDocument;
    demandetObject.demandeCredit.dureeRemboursement=demande.demandeCredit.dureeRemboursement;
    demandetObject.demandeCredit.ageVoiture=demande.demandeCredit.ageVoiture;
    demandetObject.demandeCredit.prixVoiture=demande.demandeCredit.prixVoiture;
    demandetObject.demandeCredit.puissanceFiscal=demande.demandeCredit.puissanceFiscal;
    demandetObject.demandeCredit.autoFinancement=demande.demandeCredit.autoFinancement;
    demandetObject.descriptionCredit=demande.descriptionCredit;
    demandetObject.statut=demande.statut
    this.demandesTraite.push(demandetObject);
    this.emitDemandeSubject()

  }

  getDemandeTraitById(id : number){
    var demande = this.demandesTraite.find(
      (creditObject)=>{
        return creditObject.id === id;
      }
    );
    return demande;
  }

  editDemande(id : number ,demande :demandeTraite){
    const demandeObject  = this.getDemandeTraitById(id);
    demandeObject.descriptionCredit=demande.descriptionCredit;
    demandeObject.statut=demande.statut
    this.demandesTraite.push(demandeObject);
    this.emitDemandeSubject()

  }

  triaterDemandeDirecteurZone(demandeT : demandeDirecteurZone){
    var demandeTObject : demandeDirecteurZone ={
      demande : { id:null,
        nom : null ,
        prenom : null ,
        demandeCredit :{
                  type : null ,
                  montant : null ,
                  listDocument: null,
                  dureeRemboursement: null,
                  ageVoiture:null,
                  prixVoiture:null,
                  puissanceFiscal:null,
                  autoFinancement:null,
                },
      descriptionCredit:null,
      statut:null
      },
      discriptionDirecteurZone:null,
      statut:null,
    } ;
    demandeTObject.demande.id=this.demandesDirecteurZoneT[(this.demandesDirecteurZoneT.length-1)].demande.id+1;
    demandeTObject.demande.nom=demandeT.demande.nom;
    demandeTObject.demande.prenom=demandeT.demande.prenom;
    demandeTObject.demande.demandeCredit.type=demandeT.demande.demandeCredit.type;
    demandeTObject.demande.demandeCredit.montant=demandeT.demande.demandeCredit.montant;
    demandeTObject.demande.demandeCredit.listDocument=demandeT.demande.demandeCredit.listDocument;
    demandeTObject.demande.demandeCredit.dureeRemboursement=demandeT.demande.demandeCredit.dureeRemboursement;
    demandeTObject.demande.demandeCredit.ageVoiture=demandeT.demande.demandeCredit.ageVoiture;
    demandeTObject.demande.demandeCredit.prixVoiture=demandeT.demande.demandeCredit.prixVoiture;
    demandeTObject.demande.demandeCredit.puissanceFiscal=demandeT.demande.demandeCredit.puissanceFiscal;
    demandeTObject.demande.demandeCredit.autoFinancement=demandeT.demande.demandeCredit.autoFinancement;
    demandeTObject.demande.descriptionCredit=demandeT.demande.descriptionCredit;
    demandeTObject.demande.statut=demandeT.demande.statut;
    demandeTObject.discriptionDirecteurZone=demandeT.discriptionDirecteurZone;
    demandeTObject.statut=demandeT.statut;
    this. demandesDirecteurZoneT.push(demandeTObject);
    this. emitDemandeDirecteurZoneTSubject();
  }


  deleteDemandeTById(id : number){
    var credit = this.getDemandeTraitById(id);
    var index = this.demandesTraite.indexOf(credit);
    this.demandesTraite.splice(index, 1);
    this.emitDemandeSubject();

  }


  // findDemandeTraiter(demandesDirecteurZoneT : demandeDirecteurZone[] ){
  //   var demandes : demandeDirecteurZone[]=[];
  //   for(let d in demandesDirecteurZoneT){
  //     if(d.demande.)
  //   }
  // }


}
