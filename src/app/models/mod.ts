declare module Doc {

  export interface AttestationTravail {
      nomDoc: string;
      status: boolean;
      path: string;
      url: string;
  }

  export interface AttestationSalaire {
      nomDoc: string;
      status: boolean;
      path: string;
      url: string;
  }

  export interface FichePaie2 {
      nomDoc: string;
      status: boolean;
      path: string;
      url: string;
  }

  export interface TimbreFiscale {
      nomDoc?: any;
      status: boolean;
      path?: any;
      url?: any;
  }

  export interface FichePaie3 {
      nomDoc: string;
      status: boolean;
      path: string;
      url: string;
  }

  export interface FichePaie1 {
      nomDoc: string;
      status: boolean;
      path: string;
      url: string;
  }

  export interface RootObject {
      attestationTravail: AttestationTravail;
      attestationSalaire: AttestationSalaire;
      fichePaie2: FichePaie2;
      timbreFiscale: TimbreFiscale;
      fichePaie3: FichePaie3;
      fichePaie1: FichePaie1;
  }

}
