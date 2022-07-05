import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteCredit } from 'src/app/models/note-credit';
import { ListCreditService } from 'src/app/services/creditservices/list-credit.service';
import { SendMailService } from 'src/app/services/creditservices/send-mail.service';

@Component({
  selector: 'app-theme-horizontal',
  templateUrl: './theme-horizontal.component.html',
  styleUrls: ['./theme-horizontal.component.scss']
})
export class ThemeHorizontalComponent implements OnInit , OnDestroy{


  listDemandeValid=[];

  constructor(private noteService : ListCreditService , private mailService : SendMailService,
    private routes : Router) { }

  ngOnInit(): void {

    this.noteService.getAllDemandeValidfinal().subscribe(
      (result : NoteCredit[] ) => {
        this.listDemandeValid=result;
        console.log(result);
      },
      error => {console.log(error);
      }
    );

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

  tableStatus(){
    const lenght= this.listDemandeValid.length;
    if(lenght == 0){
      return false;
    }else{
      return true;
    }
   }
  }