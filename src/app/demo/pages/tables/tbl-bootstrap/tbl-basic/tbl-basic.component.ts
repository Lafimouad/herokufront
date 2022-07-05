import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/models/marque';
import { Modele } from 'src/app/models/modele';
import { MarqueService } from 'src/app/services/MarqueService';
import { ModeleService } from 'src/app/services/ModeleService';

@Component({
  selector: 'app-tbl-basic',
  templateUrl: './tbl-basic.component.html',
  styleUrls: ['./tbl-basic.component.scss']
})
export class TblBasicComponent implements OnInit {

  BoiteType = [
    {id: 1, name: "AUTOMATIQUE"},
    {id: 2, name: "MANUELLE"}
 ];
 CarrosserieType = [
  {id: 1, name: "COMPACTE"},
  {id: 2, name: "BERLINE"},
  {id: 3, name: "SUV"},
  {id: 4, name: "MONOSPACE"},
  {id: 5, name: "PICKUP"},
  {id: 6, name: "COUPE"},
  {id: 7, name: "CABRIOLET"},
  {id: 8, name: "CITADINE"},
  {id: 9, name: "UTILITAIRE"}
];
EnergieType = [
  {id: 1, name: "ESSENCE"},
  {id: 2, name: "DIESEL"},
  {id: 6, name: "ELECTRIQUE"},
  {id: 7, name: "HYBRIDE"}
];

TransmissionType = [
  {id: 1, name: "TRACTION"},
  {id: 2, name: "PROPULSION"},
  {id: 3, name: "INTEGRALE"}
];
marqueList:any;
modeleList:any;
modele:Modele=new Modele();
nom:string;
pays: string;
id: number;
imageUrl: String;
prix: number;
carrosserie: any;
garantie: number;
nbreDePlaces: number;
nbreDeCylindres: number;
energie: any;
puissanceFiscale: number;
boite: any;
nbreDeRapports: number;
transmission: any;
marque:Marque;
modeleUpdated=new Modele();
  constructor(private modeleservice:ModeleService,private marqueservice:MarqueService) { }

  ngOnInit() {
   this.marqueservice.getMarqueList().subscribe((res)=>{
     this.marqueList=res;
   })
    this.modeleservice.getMoldeleList().subscribe((res)=>{
      this.modeleList=res;
    })
  
  
  }
  // save
  saveModele(){
this.modele.nom=this.nom;
this.modele.prix=this.prix;
this.modele.puissanceFiscale=this.puissanceFiscale;
this.modele.carrosserie=this.carrosserie;
this.modele.boite=this.boite;
this.modele.energie=this.energie;
this.modele.garantie=this.garantie;
this.modele.imageUrl=this.imageUrl;
this.modele.nbreDeCylindres=this.nbreDeCylindres;
this.modele.nbreDePlaces=this.nbreDePlaces;
this.modele.nbreDeRapports=this.nbreDePlaces;
this.modele.transmission=this.transmission;
this.modele.marque=this.marque;
    this.save();
    }
    
      save(){
        this.modeleservice.createModele(this.modele)
        .subscribe(data=>
          {
            console.log(data);
            this.ngOnInit();
          })
      }
// delete 
deleteModele(id:number){
  this.modeleservice.deleteModele(id).subscribe((data=>{console.log(data)}))
   location.reload();
}
  

    //update
    doEdit(m:Modele){
      this.modeleUpdated=m;
      console.log(this.modeleUpdated)

  }
   updateModele(){
    console.log("ccccc");
    var modele =new Modele();
    modele.id=this.modeleUpdated.id
    modele.nom=this.nom;
    modele.prix=this.prix;
    modele.puissanceFiscale=this.puissanceFiscale;
    modele.carrosserie=this.carrosserie;
    modele.boite=this.boite;
    modele.energie=this.energie;
    modele.garantie=this.garantie;
    modele.imageUrl=this.imageUrl;
    modele.nbreDeCylindres=this.nbreDeCylindres;
    modele.nbreDePlaces=this.nbreDePlaces;
    modele.nbreDeRapports=this.nbreDePlaces;
    modele.transmission=this.transmission;
    modele.marque=this.marque;
    console.log("ccccc",modele);
    this.modeleservice.updateModele(modele)
        .subscribe(data => {
          console.log(data)
         }
         )

         location.reload();

        }
     
        //search
        searchMarque(key:string):void{
          const result : any[]=[];
          for(const modele of this.modeleList){
            if(modele.nom.toLocaleLowerCase().indexOf(key.toLocaleLowerCase())!== -1){
              result.push(modele);
            }
          }
          this.modeleList=result;
          if(result.length==0|| !key){
            this.modeleservice.getMoldeleList().subscribe(res=>{console.log(res);
              this.modeleList=res;})
      
          }
        }
      

}
