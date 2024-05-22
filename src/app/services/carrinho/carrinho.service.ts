import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Carrinho } from '../../models/carrinho/carrinho';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/itemcarrinho";

  constructor() {  }

  listAll(): Observable<Carrinho[]>{
    
    return this.http.get<Carrinho[]>(this.API+"/listAll");

  }

}
