import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { LogAuditoria } from '../models/log-auditoria';

@Injectable({
  providedIn: 'root',
})
export class LogAuditoriaService {
  http = inject(HttpClient);

  API = environment.SERVIDOR + '/api/log';

  constructor() {}

  listAll(): Observable<LogAuditoria[]> {
    return this.http.get<LogAuditoria[]>(this.API + '/listAll');
  }
  
  findLogsByCriterio(
    startDate?: Date,
    endDate?: Date,
    acao?: string,
    roleUsuario?: string,
    logName?: string,
    entity?: string,
    emailUsuario?: string
  ): Observable<LogAuditoria[]> {
    let params = new HttpParams();
    
    if (startDate) {
      params = params.set('startDate', startDate.toISOString().slice(0, 19));
    }
    if (endDate) {
      params = params.set('endDate', endDate.toISOString().slice(0, 19));
    }
    if (acao) {
      params = params.set('acao', acao);
    }
    if (roleUsuario) {
      params = params.set('roleUsuario', roleUsuario);
    }
    if (logName) {
      params = params.set('logName', logName);
    }
    if (entity) {
      params = params.set('entity', entity);
    }
    if (emailUsuario) {
      params = params.set('emailUsuario', emailUsuario);
    }

    return this.http.get<LogAuditoria[]>(this.API + '/findLogsByCriterio', { params });
  }
}
