import { demandeTraite } from "./demandeTraite.model";

export class demandeDirecteurZone{

  constructor(public demande : demandeTraite ,
              public discriptionDirecteurZone : string,
              public statut : string){

  }
}
