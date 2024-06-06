import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
   API_USUARIO = 'http://localhost:8080/api/cliente';

   http = inject(HttpClient);

  findByUsuarioId(idUsuarioLogado: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.API_USUARIO+"/findByUsuarioId/"+idUsuarioLogado);
  }

}
