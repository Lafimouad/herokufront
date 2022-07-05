import {Credit} from './credit.model'

export class demandeTraite {


  constructor(public id: number,
              public nom : string ,
              public prenom : string ,
              public demandeCredit :{
                type : string ,
                montant : number ,
                listDocument: string,
                dureeRemboursement: number,
                ageVoiture:number,
                prixVoiture:number,
                puissanceFiscal:number,
                autoFinancement: number,
              },
              public descriptionCredit : string ,
              public statut : string
          ){

  }
}
