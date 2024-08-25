import { Component, inject } from '@angular/core';
import { LogAuditoria } from '../../models/log-auditoria';
import { LogAuditoriaService } from '../../services/log-auditoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-auditoria',
  standalone: true,
  imports: [],
  templateUrl: './log-auditoria.component.html',
  styleUrl: './log-auditoria.component.scss'
})
export class LogAuditoriaComponent {

  logService = inject(LogAuditoriaService);

  logCompleto: LogAuditoria[] = [];

  constructor(){
    this.listAll();
    
  }

  listAll(){
    this.logService.listAll().subscribe(
      {
        next: lista =>{
          this.logCompleto = lista;
          console.log(lista);
        },
        error: erro => {
          Swal.fire({
            title: 'Erro',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      }
    );
  }
}
