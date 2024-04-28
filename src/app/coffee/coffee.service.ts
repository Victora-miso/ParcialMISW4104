import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Coffee } from './coffee';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CoffeeService {

    private apiUrl: string = environment.baseUrl;

    

    constructor(private http: HttpClient) { }


    getCoffee(): Observable<Coffee[]> {
        return this.http.get<Coffee[]>(this.apiUrl);
      }



}
