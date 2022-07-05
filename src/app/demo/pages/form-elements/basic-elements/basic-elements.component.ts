import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/models/marque';
import { Modele } from 'src/app/models/modele';
import { MarqueService } from 'src/app/services/MarqueService';
import { ModeleService } from 'src/app/services/ModeleService';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss']
})
export class BasicElementsComponent implements OnInit {

  marque:Marque= new Marque();
  imageUrl:string
  nom:string
  pays:string
    constructor(private marqueserive : MarqueService,private modeleservice:ModeleService) { }
  
  ngOnInit() {
  }

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
            console.log(data)
          })
      }
}
