import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {pipe, Subscription } from 'rxjs';
import { NoteCredit } from 'src/app/models/note-credit';
import { CreditService } from 'src/app/services/creditservices/credit.service';
import { DemandeTraiteService } from 'src/app/services/creditservices/demande-traite.service';
import { KeycloakSecurityService } from 'src/app/services/creditservices/keycloak-security.service';
import { ListCreditService } from 'src/app/services/creditservices/list-credit.service';
import { ListNotificationService } from 'src/app/services/creditservices/list-notification.service';

@Component({
  selector: 'app-theme-static',
  templateUrl: './theme-static.component.html',
  styleUrls: ['./theme-static.component.scss']
})
export class ThemeStaticComponent implements OnInit  ,OnDestroy {

  
  msgTest = "test test";

  listNotifUpdate ;

  credits : NoteCredit[] = []
  creditSupscription : Subscription;


  demandesTraite : NoteCredit[]=[];
  demandeSubscription : Subscription;


  // demandesTdirecteurZone : demandeDirecteurZone[];
  // demandeTdirecteurZoneSubscription : Subscription;


  type : string ;
  role : string;
  editChef : boolean ;
  editDirecteurZone:boolean;
  listD =[];

 searchText : string ;
  // searchText : string;

  searchText2 : string;

  listNotifUpdat;
  constructor(public routes :Router, private noteCreditService : ListCreditService , private creditService : CreditService ,
     private demandeService : DemandeTraiteService, private keycloakSecurity : KeycloakSecurityService,
      private demandeListService : ListCreditService ,
      private listNotifService : ListNotificationService) {
    this.role=this.keycloakSecurity.role;
    console.log("this user is "+this.role);

  }

  logthis(res: any){
    console.log('var is  ' , res);
    // const l = document.getElementsByClassName("P").length;
    // console.log('taille is ', l);

  }

  tableTest(rows : number){
    if(rows === 1 ){
      console.log("true");
    }else{
      console.log("false");

    }
  }


  updateListNotif(id : number){
    this.listNotifService.updateListNotif(+id).subscribe(
      resList =>  this.listNotifService.listNotification().subscribe(
        res => {
          this.listNotifUpdate = res ;
          console.log( 'have been updated list ',res);

          this.listNotifService.listNotifEmit.next(this.listNotifUpdate);
        }
      )
    );
    // this.listNotifService.getnotification();



  }

  ngOnInit(): void {



      // this.noteCreditService.refresh.subscribe(
      //   ()=> {
      //     this.getAllNoteWithToken();
      //   }
      // );

      // this.getAllNoteWithToken();

      this.noteCreditService.getAllNoteWithToken();
      this.creditSupscription=this.noteCreditService.listeNoteSubject.subscribe(
        (result: NoteCredit[])=>{
          this.credits=result;
          console.log('list credit ',this.credits);
        },
        error=>{
          console.log("error :"+error);
        }
      );
      // this.noteCreditService.emmitListNoteSubject();


      this.noteCreditService.getListNotreCreditTait();
      this.demandeSubscription=this.noteCreditService.listNoterTraitSubject.subscribe(
        (result : NoteCredit[]) => {
          this.demandesTraite= result;
          console.log(this.demandesTraite);
        },error=>{
          console.log("error :"+error);

        }
      );
      this.noteCreditService.emitlistNoteTrait();

      // this.creditSupscription= this.creditService.creditSubject.subscribe(
      //   (credits: any[])=>{
      //     this.credits= credits;
      //   }
      // );
      // this.creditService.emitCredit();

      // this.demandeListService.getAllNote().subscribe(
      //   res=> {
      //     this.listD=res;
      //     console.log(res);

      //   },
      //   error=> {
      //     console.log(error);

      //   }
      // )


    //   this.demandeSubscription= this.demandeService.demandeTsubject.subscribe(
    //     (demandes: any[])=>{

    //       this.demandesTraite=demandes;
    //     }
    //   );
    //   this.demandeService.emitDemandeSubject();


    // console.log(this.credits);
    // }


  //   if(this.role=="admin"){
  //     this.editChef  = false ;
  //     this.editDirecteurZone = true;

  //     this.demandeSubscription= this.demandeService.demandeTsubject.subscribe(
  //       (demandes: any[])=>{

  //         this.demandesTraite= demandes;
  //       }
  //     );
  //     this.demandeService.emitDemandeSubject();




  //     this.demandeTdirecteurZoneSubscription=this.demandeService.demandeDirecteurZoneSubject.subscribe(
  //       (demandes : any[])=>{
  //         this.demandesTdirecteurZone=demandes;

  //     }
  //   );
  //     this.demandeService.emitDemandeDirecteurZoneTSubject();
  // }
}



  tableStatutCredit(){

      const lenght  = this.credits.length;
    if(lenght == 0){
      return false
    }else{
      return true
       }


    // }if(this.role=="admin"){
    // const lenght  = this.demandesTraite.length;
    // console.log("table est "+lenght);
    //   if(lenght == 0){
    //     return false
    //   }else{
    //     return true
    //    }



  }


  tableStatutDemandeTraite(){
    const lenght = this.demandesTraite.length;
    if(lenght == 0){
      return false
    }else{
      return true
     }
  }

  ngOnDestroy(): void {

      this.creditSupscription.unsubscribe();
      this.demandeSubscription.unsubscribe();
      this.noteCreditService.getAllNoteWithToken().unsubscribe();

      // this.demandeSubscription.unsubscribe();

      // this.demandeSubscription.unsubscribe();
      // this.demandeTdirecteurZoneSubscription.unsubscribe();


  }




  redirectToCreditDetails(type : string , index : number , etat : string){
    if(type ==='Automobile'){
      this.routes.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.routes.navigate(['/creditAuto/'+index+'/'+etat]);
    });
      // this.setIdCreditAuto(index);
    // }if(type ==='consommation'){
    //   this.routes.navigate(['/creditConsommation'])
    }if(type ==='Foyer'){
      this.routes.navigate(['/creditFoyer/'+index+'/'+etat])
    }if(type ==='Renovation'){
      this.routes.navigate(['/creditRenovation/'+index+'/'+etat])
    }
  }



  demandeNotFound(tableLength : number){
    if(tableLength == 1){
      return true;
    }else {
      return false;
    }

  }



  // private getAllNoteWithToken(){
  //   this.noteCreditService.listeNoteSubject.subscribe(
  //     (result: NoteCredit[])=>{
  //       this.credits=result;
  //       console.log(this.credits);
  //     },
  //     error=>{
  //       console.log("error :"+error);
  //     }
  //   );
  // }

// search non taité
  search1(key:string):void{
    const result : any[]=[];
    for(const credit of this.credits){
      if(credit.demandeCredit.client.nom.toLocaleLowerCase().indexOf(key.toLocaleLowerCase())!== -1){
        result.push(credit);
      }
    }
    this.credits=result;
    if(result.length==0|| !key){
      this.noteCreditService.getAllNoteWithToken();
      this.creditSupscription=this.noteCreditService.listeNoteSubject.subscribe(
        (result: NoteCredit[])=>{
          this.credits=result;
          console.log('list credit ',this.credits);
        },
        error=>{
          console.log("error :"+error);
        }
      );

    }
  }

  
}
