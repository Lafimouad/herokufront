import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Commentaire } from 'src/app/models/commentaire';
import { CreditService } from 'src/app/services/creditservices/credit.service';
import { DemandeTraiteService } from 'src/app/services/creditservices/demande-traite.service';
import { KeycloakSecurityService } from 'src/app/services/creditservices/keycloak-security.service';
import { ListCreditService } from 'src/app/services/creditservices/list-credit.service';
import { NotifierService } from 'src/app/services/creditservices/notifier.service';

@Component({
  selector: 'app-credit-auto',
  templateUrl: './credit-auto.component.html',
  styleUrls: ['./credit-auto.component.scss']
})
export class CreditAutoComponent implements OnInit {

  nom : string ;
prenom : string ;
type: string ;
montant : number ;
dureeRemboursement : number ;
listDocument : string ;


description : string ;
statut : string ;
demandeDeCredit:any;



noteCredit;
role;
listCommentaires =[];
etat;
niveau : number ;
id;
info: BehaviorSubject<any> = new BehaviorSubject('null');
  // demandeDeCredit:any;
  constructor(private keycloakSecurity : KeycloakSecurityService,
    private notifierService : NotifierService,
     private noteCreditService : ListCreditService , private creditService : CreditService , private routes : ActivatedRoute , private route : Router , private demandeService : DemandeTraiteService ) {
    this.role=this.keycloakSecurity.role;
    if(this.role=='ChefAgence'){
      this.niveau=0 ;
    }
    if(this.role=='DirecteurZone'){
      this.niveau=1;
    }
    if(this.role=='ComitéSup'){
      this.niveau=2;
    }
    if(this.role=='ComitéCentrale'){
      this.niveau=3;
    }


   }

  ngOnInit(): void {
    // const queryParams = this.routes.snapshot.queryParams
    // const routeParams = this.routes.snapshot.params;
    // console.log('queryParams' , queryParams);
    // console.log('routeParams' , routeParams);
    // = this.routes.snapshot.params['index'];

    this.etat = this.routes.snapshot.params['etat'];
    console.log(this.etat);

    // this.creditService.getCreditById(id).subscribe()
    this.routes.params.subscribe(routeParams => {
      this.id=routeParams.index;
      this.noteCreditService.getNoteCreditByIdApi(+this.id).subscribe(
        result => {
          this.noteCredit=result;
          console.log('result' , result);
        },
        error => { console.log(error); }

      );
    });



       console.log('note credit '+this.noteCredit);

       if(this.niveau > 0 || this.etat=='edit'){
        this.noteCreditService.getCommentaireNoteCredit(+this.id).subscribe(
          result => {
            this.listCommentaires=result;
            console.log(result);

            console.log('aaaa '+this.listCommentaires);

          }
        );

       }
  }

  showNotif(){
    // console.log("test test ",this.info.next());

    this.info.asObservable().subscribe(res => {
      if(res === 'true'){
        this.notifierService.showNotification('Cette Demande a été validée avec succès '  , 'Demande validée !', 'success');
      } else {
        this.notifierService.showNotification('Cette Demande a été refusée '  , 'Demande Refusée !', 'error');
      }
    })

  }

  setCommentStatValue(stat : string){
    this.info.next(stat);
   }

  getDescription(form:NgForm){

    const id :number = this.routes.snapshot.params['index'];

    const description : string = form.value['description'];
    const statut : Boolean = form.value['statut'];


    this.setCommentStatValue(form.value['statut']);

    let nom : string =this.keycloakSecurity.decode.family_name;
    let prenom : string=this.keycloakSecurity.decode.given_name;


    // const idNoteCredit : number = this.noteCreditService.getNoteCreditByIdApi(+id).id;
    // const idNoteCredit : Number = this.noteCreditService.getNoteCreditById(+id).id;

    let commentaire = new Commentaire(nom , prenom , description , statut );


    if(this.etat=='ajout'){
      this.noteCreditService.ajouterAvisAgent(id,commentaire).subscribe(
        result => {
          console.log(result);
          this.route.navigate(['/layout/static']);

        },
        erreur => {console.log(erreur)}
      );
    }
    if(this.etat=='edit'){
      this.noteCreditService.updateNoteCredit(id,commentaire).subscribe(
        result => {
          console.log(result);
          this.route.navigate(['/layout/static']);

        },
        erreur => {console.log(erreur)}
      );

    }


    // const id = this.routes.snapshot.params['index'];

    // const description = form.value['description'];
    // const statut = form.value['statut'];

    // // console.log(id);

    // // console.log(this.creditService.getCreditById(+id).nom);


    // this.demande.nom=this.creditService.getCreditById(+id).nom;
    // this.demande.prenom=this.creditService.getCreditById(+id).prenom;
    // this.demande.demandeCredit.type=this.creditService.getCreditById(+id).demandeCredit.type;
    // this.demande.demandeCredit.montant=this.creditService.getCreditById(+id).demandeCredit.montant;
    // this.demande.demandeCredit.listDocument=this.creditService.getCreditById(+id).demandeCredit.listDocument;
    // this.demande.demandeCredit.dureeRemboursement=this.creditService.getCreditById(+id).demandeCredit.dureeRemboursement;
    // this.demande.descriptionCredit=description;
    // this.demande.statut=statut;

    // this.demandeService.triaterDemande(this.demande);
    // this.creditService.deleteCreditById(+id);
    // console.log(this.demande.demandeCredit.dureeRemboursement);

    // // console.log(form.value);
    // // console.log(this.demande);
    // this.route.navigate(['/listCredit']);

  }

}
