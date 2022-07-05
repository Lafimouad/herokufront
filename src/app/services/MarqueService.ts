import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marque } from '../models/marque';


@Injectable({
    providedIn: 'root'
})

export class MarqueService {

    private baseUrl1 = 'http://20.248.128.253:9008/api/marque';
    private baseUrl='http://localhost:9008/api/marque';

    constructor(private http: HttpClient) { }

    //get all marque
    getMarqueList(): Observable<Object> {
        return this.http.get(`${this.baseUrl}`);
    }
   

    // product image

    addImage(L: File): Observable<any>{
        const file = new FormData();
         file.append('file', L);
        return this.http.put('http://localhost:9008/api/upload',file)
    }

    // add a  Marque
    createMarque(marque: Marque): Observable<object> {
        return this.http.post(`${this.baseUrl}`,marque);
    }

    // delete a Marque
    deleteMarque(id: number): Observable<any> {
        console.log(id);
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    // get Marque by id
    getProduct(id: number): Observable<Object> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    // update Marque
    updateMarque( marque: Marque): Observable<Object> {
        return this.http.put(`${this.baseUrl}`,marque);
    }


}
