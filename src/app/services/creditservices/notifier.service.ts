import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor() { }

  showNotification(displayMessage :  string , titleText : string , messageType : 'error' | 'success'){
    
  }
}
