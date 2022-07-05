import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modele } from '../models/modele';


@Injectable({
    providedIn: 'root'
})

export class ModeleService {

    private baseUrl1 = 'http://20.248.128.253:9008/api/modele';
    private baseUrl = 'http://localhost:9008/api/modele';

    constructor(private http: HttpClient) { }

    //get all modeles
    getMoldeleList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
   

    // product image

    addImage(L: File): Observable<any>{
        const file = new FormData();
         file.append('file', L);
        return this.http.put('http://localhost:9008/api/upload',file)
    }

    // add a  modele
    createModele(modele: Modele): Observable<object> {
        return this.http.post(`${this.baseUrl}`,modele);
    }

    // delete a modele
    deleteModele(id: number): Observable<any> {
        console.log(id);
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    // get Modele by id
    getModele(id: number): Observable<Object> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    // update Modele
    updateModele (modele: Modele): Observable<Object> {
        return this.http.put(`${this.baseUrl}`,modele);
    }

// get Car Number
    getCarNumber(): Observable<any> {
        return this.http.get('http://localhost:9008/api/getcarnumber');
    }
}
