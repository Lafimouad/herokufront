export class Config {
    public static get LOCAL_URL(){
      return 'http://localhost' ;
    }

    public static get API_ADDRESS(){
      return 'http://10.255.255.31' ;
    }

    public static get GESTION_CREDIT(){
      return 'http://20.82.207.118:8080'
      // return 'http://10.255.255.31:'
      // return 'http://localhost:9002' ;
    }


  public static get KEYCLOAK_URL(){
    return 'http://20.67.134.169:8080/auth'
  }

  public static get GESTION_DOCUMENT(){
    return 'http://20.67.133.33:8080' ;
  }
}
