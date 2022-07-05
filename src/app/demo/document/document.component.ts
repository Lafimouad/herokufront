import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as html2pdf from 'html2pdf.js';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { DocumentService } from 'src/app/services/creditservices/document.service';
import { ListCreditService } from 'src/app/services/creditservices/list-credit.service';
import { NoteCredit } from 'src/app/models/note-credit';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentComponent implements OnInit {


  listDocument =[] ;
  imageUrl ;
  titleDocument;
  contButtonDisplay ;
  noteCreditAccepter ;
  id ;
  doc ;
  nomDoc = null  ;
  // listDocument = new Subject();
  // listDocument = [];
  displayTitle = false  ;
  dateUpdateDoc ;
  typeDemande ;
  etatContrat = false ;
  buttonDisplay ;
  typeNoteCredit ;
  constructor(private documentService : DocumentService,
    private noteService : ListCreditService,
    private http : HttpClient,
    private routes : ActivatedRoute) { }



  ngOnInit(): void {
    const id = this.routes.snapshot.params['id'];
    const type = this.routes.snapshot.params['type'];
    this.id = id ;
    this.typeNoteCredit = type ;

    console.log('type is ', this.typeNoteCredit);
    // console.log('id is ', id);

    this.noteCreditAccepter = [];

    this.getlistDocument(28,  this.typeNoteCredit );

    this.getNoteCreditAccepterById(+id);

    this.getLastUpdateDoc(28);
    this.getStatusContrat(+id);

}


  getlistDocument(id : number , type : string){
    if(type == 'Automobile'){
      this.documentService.listDocument(+id).subscribe(
        (res)=> {
          this.setvalue(res);

          console.log("test est ", this.listDocument);
          this.viewDocument(this.listDocument);

          this.listDocument.forEach(elt => {
            if(elt.status == true){
              this.displayTitle = elt.status ;
              return ;
            }
          });
          // this.displaySendContratButton();
        },
        (error) =>{
          console.log(error);
        }
      );
    }
    if(type == 'Renovation'){
      this.documentService.listDocumentRenovation(+id).subscribe(
        (res)=> {
          this.setvalue(res);

          console.log("test est ", this.listDocument);
          this.viewDocument(this.listDocument);

          this.listDocument.forEach(elt => {
            if(elt.status == true){
              this.displayTitle = elt.status ;
              return ;
            }
          });
          // this.displaySendContratButton();
        },
        (error) =>{
          console.log(error);
        }
      );
    }
    if(type == 'Foyer'){
      this.documentService.listDocumentFoyer(+id).subscribe(
        (res)=> {
          this.setvalue(res);

          console.log("test est ", this.listDocument);
          this.viewDocument(this.listDocument);

          this.listDocument.forEach(elt => {
            if(elt.status == true){
              this.displayTitle = elt.status ;
              return ;
            }
          });
          // this.displaySendContratButton();
        },
        (error) =>{
          console.log(error);
        }
      );
    }

  }


  displaySendContratButton(){
    var blocked = false ;
    for(let document of this.listDocument){
      if(document.status == false  ){
        blocked = true ;
        break
      }

    }
    console.log('etat blocked button ', this.etatContrat ||blocked);

    // this.buttonDisplay = this.etatContrat ||blocked
    return  this.buttonDisplay = this.etatContrat ||blocked  ;
  }


  setvalue (valeur : any ){
    this.listDocument = valeur ;
  }


  viewCondition(value : string){
    if(value == "true"){ return true };
    if(value == "false"){ return false };
  }


  getImageData(value : string ,title : string , docType : string ){
    this.imageUrl = value ;
    this.titleDocument = title ;
    this.nomDoc = docType ;

    // console.log('this nomDoc is ', this.nomDoc);

  }

  viewDocument(listDocument = []){
    for (let i = 0; i < listDocument.length; i++) {
      if(listDocument[i].status == false){
        this.contButtonDisplay = 'false';
        // console.log('Button status ',this.contButtonDisplay);
        break ;
      }
    }
  }

  getNoteCreditAccepterById( id : number){
    this.noteService.getAllDemandeValidfinal().subscribe(

      (result :NoteCredit[] ) => {
        this.noteCreditAccepter = result.filter(
         result => result.demandeCredit.id == id

        );

          // this.typeDemande = Object.values(this.noteCreditAccepter);

        // let value = [];
        // Object.keys(this.noteCreditAccepter).map((key) => {value.push(result[key])})
        // this.typeDemande = Object.values(this.noteCreditAccepter['0']['demandeCredit']);

        this.typeDemande = this.noteCreditAccepter[0]?.demandeCredit.type ;
        // this.typeDemande = JSON.stringify(this.noteCreditAccepter['0'].demandeCredit.type)
        console.log("curent note credit", this.noteCreditAccepter);
        console.log("type demande is ", this.typeDemande);
        // console.log('test value ',value);


      },
      error => {console.log(error);
      }
    );

  }


  async savecontratPdf(){
    const option = {
      margin: [30, 20, 30, 20] ,
      filename : 'Contrat.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { format : 'A4', orientation: 'landscape'  },

    };

    const content : Element = document.getElementById('contrat');

    var worker = html2pdf() ;

    worker.set(option)
      .from(content)
      .toPdf()
      .save();
  }

  async saveContrat(){
    const option = {
      margin: [30, 20, 30, 20] ,
      filename : 'Contrat.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { format : 'A4', orientation: 'landscape'  },

    };

    const content : Element = document.getElementById('contrat');

    this.doc = await html2pdf().set(option).from(content).toPdf().output('blob','test.pdf').then(
      (  data) => {
          data.filename = "test.pdf";
          data.originalFilename = "test.pdf"
          return data
        }
      );

      const headers = new HttpHeaders();

      // JSON.stringify(this.doc);
      const formData = new FormData();
      formData.append("imageFile", this.doc, `Contrat_${Date.now()}.pdf`);
      // const body = this.doc ;


      formData.append("firstName",this.noteCreditAccepter[0]?.demandeCredit.client.nom );
      formData.append("lastName",this.noteCreditAccepter[0]?.demandeCredit.client.prenom);
      formData.append("email",this.noteCreditAccepter[0]?.demandeCredit.client.email);
      formData.append("numTel",this.noteCreditAccepter[0]?.demandeCredit.client.numTel);


      // extern version 1
      // this.http.post(`http://20.67.133.33:8080/uploadContrat/${this.id}/${this.typeDemande}` , formData , { headers, responseType: 'text'}  ).subscribe(response => console.log(response));
      // local
      // this.http.post(`http://10.255.255.32:9011/Signer/${this.typeDemande}/${this.id}` , formData , { headers, responseType: 'text'}  ).subscribe(response => console.log(response));
      this.http.post(`http://20.67.133.33:8080/Signer/${this.typeDemande}/${this.id}` , formData , { headers, responseType: 'text'}  ).subscribe(response => console.log(response));
  }



  testModalTypeFile(){
    if(this.nomDoc?.slice(-3) == 'pdf'){
      return true
    }else{
      return false
    }
  }



  getLastUpdateDoc(idCredit : number ){
    this.documentService.lastUpdateDocument(+idCredit).subscribe(
      (res) => {
        console.log("getLastUpdateDoc",res)
        this.dateUpdateDoc = res ;
        console.log('this last date update doc is ', this.dateUpdateDoc);
     }
    )
  }

  getStatusContrat(id : number ){

    this.documentService.displayButton(+id).subscribe(
      (res : boolean) => {
        this.etatContrat= res ;

        this.displaySendContratButton()
        console.log('status contrat send', this.etatContrat);

      }
    )
  }

}
