import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrinho } from '../models/carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/carrinho";
  
  constructor() { }

  listAll(): Observable<Carrinho[]>{
    return this.http.get<Carrinho[]>(this.API + "/listAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API + "/delete/" + id, {responseType: 'text' as 'json'});
  }

  
}
