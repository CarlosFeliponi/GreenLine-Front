import { Component, inject } from '@angular/core';
import { LogAuditoria } from '../../models/log-auditoria';
import { LogAuditoriaService } from '../../services/log-auditoria.service';
import Swal from 'sweetalert2';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';


@Component({
  selector: 'app-log-auditoria',
  standalone: true,
  imports: [MdbAccordionModule],
  templateUrl: './log-auditoria.component.html',
  styleUrl: './log-auditoria.component.scss'
})
export class LogAuditoriaComponent {

  logService = inject(LogAuditoriaService);

  logCompleto: LogAuditoria[] = [];
  logSortido: LogAuditoria[] =[];
  ordem: boolean = true;

  constructor(){
    this.listAll();
  }
  
  listAll(){
    this.logService.listAll().subscribe(
      {
        next: lista =>{
          this.logCompleto = lista;
          this.logSortido = lista;
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
  sortById(){
    this.ordem = !this.ordem;
    if(this.ordem){
      this.logSortido.sort(function(a, b){
        if(a.idLog < b.idLog)
          return -1;
        if(a.idLog > b.idLog)
          return 1;
        return 0;
      });
    }
    else{
      this.logSortido.sort(function(a, b){
        if(a.idLog > b.idLog)
          return -1;
        if(a.idLog < b.idLog)
          return 1;
        return 0;
      });
    }
  }
  sortByAcao(){
    this.ordem = !this.ordem;
    if(this.ordem){
      this.logSortido.sort(function(a, b){
        if(a.acao < b.acao)
          return -1;
        if(a.acao > b.acao)
          return 1;
        return 0;
      });
    }
    else{
      this.logSortido.sort(function(a, b){
        if(a.acao > b.acao)
          return -1;
        if(a.acao < b.acao)
          return 1;
        return 0;
      });
    }
  }
}
