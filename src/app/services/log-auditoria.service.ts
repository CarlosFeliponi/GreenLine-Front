import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { LogAuditoria } from '../models/log-auditoria';

@Injectable({
  providedIn: 'root'
})
export class LogAuditoriaService {

  
  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/log";

  constructor() { }

  listAll(): Observable<LogAuditoria[]>{
    return this.http.get<LogAuditoria[]>(this.API+"/listAll");
  }
}
