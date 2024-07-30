import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MargaritaService {

  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

  constructor(private http: HttpClient) { }

  obtenerCocteles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}