import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendas } from '../models/vendas';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/carrinho";
  
  constructor() { }

  listAll(): Observable<Vendas[]>{
    return this.http.get<Vendas[]>(this.API + "/listAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API + "/delete/" + id, {responseType: 'text' as 'json'});
  }

  
}
