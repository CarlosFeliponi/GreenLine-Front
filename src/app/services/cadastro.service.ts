import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Cadastro } from '../models/cadastro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/usuario";

  constructor() { }

  save(cadastro: Cadastro): Observable<string>{
    return this.http.post<string>(this.API+"/save", cadastro, {responseType: 'text' as 'json'});
  }

  findById(idUsuario: number): Observable<Cadastro>{
    return this.http.get<Cadastro>(this.API+"/findById/"+idUsuario);
  }
}
