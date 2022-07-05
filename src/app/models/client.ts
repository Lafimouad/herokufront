import { DemandeCredit } from './demande-credit';

export class Client {



  constructor(  public  id?:Number,

    public  nom ?:String,

    public  prenom ?:String,

    public  email ?:String,

    public  DateNaissance ?:String,

    public  NumTel?:Number,

    public   Adress ?:String,

    public  Ville ?:String,

    public  CodePostal ?:Number,

    public   Fonction ?:String,

    public  typeContrat ?:String,

    public  SalaireBrut ?:Number,

    public  SalaireNet?:Number,

    public  secteurActivite?:String,

    public keyCloakId ?:String,

    public demandeCreditList ?: Array<DemandeCredit>,

    public  Employeur ?:String){}
}
