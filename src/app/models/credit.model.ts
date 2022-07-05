export class Credit {

  constructor(  public id : number,
                public nom : string ,
                public prenom : string ,
                public demandeCredit :{
                  type : string ,
                  montant : number ,
                  listDocument: string,
                  dureeRemboursement: number,
                  autoFinancement: number,
                  ageVoiture:number,
                  prixVoiture: number,
                  puissanceFiscal : number,
                }){

  }

}
