import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ItemCarrinho } from '../models/item-carrinho';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemCarrinhoService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/itemcarrinho";

  constructor() { }

  listAll(): Observable<ItemCarrinho[]>{
    return this.http.get<ItemCarrinho[]>(this.API+"/listAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }

  // updateQuantity(id: number, quantProd: number): Observable<Carrinho> {
  //   return this.http.put<Carrinho>(${this.API}/update/${id}, { quantProd });
  // }

}
