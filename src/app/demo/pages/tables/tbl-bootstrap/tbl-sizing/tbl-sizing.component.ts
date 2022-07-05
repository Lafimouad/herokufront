import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/models/marque';
import { Modele } from 'src/app/models/modele';
import { MarqueService } from 'src/app/services/MarqueService';

@Component({
  selector: 'app-tbl-sizing',
  templateUrl: './tbl-sizing.component.html',
  styleUrls: ['./tbl-sizing.component.scss']
})
export class TblSizingComponent implements OnInit {
  marqueList:any;
  marque:Marque=new Marque();
  marqueUpdated:Marque=new Marque();
  nom:string;
  pays:string;
  imageUrl:string;
  modele:Modele[];
  constructor(private marqueserive : MarqueService) { }

  ngOnInit() {
    this.marqueserive.getMarqueList().subscribe((res)=> {
      this.marqueList=res;
  });

}

// save
saveMarque(){
  console.log(this.nom);
  console.log(this.pays);

  this.marque.nom=this.nom;
  this.marque.pays=this.pays;
  this.marque.imageUrl=this.imageUrl;
  console.log(this.marque);

  this.save();
  }
  
    save(){
      this.marqueserive.createMarque(this.marque)
      .subscribe(data=>
        {
          console.log(data);
          this.ngOnInit();
        })
    }

      //search
  searchMarque(key:string):void{
    const result : Marque[]=[];
    for(const marque of this.marqueList){
      if(marque.nom.toLocaleLowerCase().indexOf(key.toLocaleLowerCase())!== -1){
        result.push(marque);
      }
    }
    this.marqueList=result;
    if(result.length==0|| !key){
      this.marqueserive.getMarqueList().subscribe(res=>{console.log(res);
        this.marqueList=res
        console.log("prod",this.marqueList);})

    }
  }


  // delete 
  deleteMarque(id:number){
    this.marqueserive.deleteMarque(id).subscribe(data=>console.log(data))
    location.reload();
  }



    //update
    doEdit(m:Marque){
      this.marqueUpdated=m;
      console.log(this.marqueUpdated)

  }
   updateMarque(){
    console.log("ccccc");
    var matqyue =new Marque();
    matqyue.id=this.marqueUpdated.id
    matqyue.nom=this.nom;
    matqyue.imageUrl=this.imageUrl;
    matqyue.pays=this.pays;
    console.log("ccccc",matqyue);
    this.marqueserive.updateMarque(matqyue)
        .subscribe(data => {
          console.log(data)
         }
         )

         location.reload();

        }
     
  
   
      
  



}