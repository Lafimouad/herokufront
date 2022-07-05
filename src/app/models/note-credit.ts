import { Commentaire } from './commentaire';
import { DemandeCredit } from './demande-credit';

export class NoteCredit {


  constructor(  public  id ?:number ,


    public  level?:Number,

    public    CurrentLevel?:Number,

    public   status?:Boolean,

    public   demandeCredit?:DemandeCredit ,

    public  commentaire ?: Array<Commentaire>
    )
    {}
}
