import { Client } from './client';

export class DemandeCredit {

    constructor(

        public id :number,



        public Type : string,

        public Montant ?: Number,

        public DureeRemboursement ?:Number,
        public client ?: Client,
        public processId ?: String,

        public simulation ?:Number ,


        public  PrixVoiture ?:Number ,

        public  AgeVoiture ?:Number ,

        public  AutoFinancement ?:Number ,

        public  PuissanceFiscale ?:Number,
        public  ValeurTraveaux ?:Number


    ){

    }
}
