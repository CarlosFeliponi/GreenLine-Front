import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public usuarioLogado!: Login;

  private API = 'http://localhost:8080/api/usuario'; // URL do endpoint de login no backend

  constructor(private http: HttpClient) { }

  login(loginData: Login): Observable<Login> {
    console.log('Dados de login:', loginData);
    return this.http.post<Login>(this.API+"/login", loginData); // Envie o objeto Login completo no corpo da solicitação
  }

  
  findByLoginId(idLoginLogado: number): Observable<Login>{
    return this.http.get<Login>(this.API+"/findByLoginId/"+idLoginLogado);
  }



}