import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from '../models/cadastro'; // Ajuste o caminho conforme necessário
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
   API_CADASTRO = 'http://localhost:8080/api/usuario';
   API_USUARIO = 'http://localhost:8080/api/cliente';


  constructor() { }
}
