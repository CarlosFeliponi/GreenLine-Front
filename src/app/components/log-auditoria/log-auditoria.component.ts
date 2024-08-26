import { Component, inject } from '@angular/core';
import { LogAuditoria } from '../../models/log-auditoria';
import { LogAuditoriaService } from '../../services/log-auditoria.service';
import Swal from 'sweetalert2';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';

// import para o calendario
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

// import para o input de ordem
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

//----------
interface Ordem {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-log-auditoria',
  standalone: true,
  imports: [
    MdbAccordionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './log-auditoria.component.html',
  styleUrl: './log-auditoria.component.scss',
})
export class LogAuditoriaComponent {
  public params = {
    startDate: undefined,
    endDate: undefined,
    acao: undefined,
    roleUsuario: undefined,
    logName: undefined,
    emailUsuario: undefined
  }
  selected = 'option1';

  // startDate: Date | null = null;
  // endDate: Date | null = null;

  logService = inject(LogAuditoriaService);

  logAuditoria: LogAuditoria[] = [];
  ordem: boolean = true;

  constructor() {
    this.listAll();
  }

  listAll() {
    this.logService.listAll().subscribe({
      next: (lista) => {
        this.logAuditoria = lista;
      },
      error: (erro) => {
        console.log('Erro: ', erro);
        Swal.fire({
          title: 'Erro',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      },
    });
  }

  sortLog() {
    console.log(this.ordem);
    if (this.ordem) {
      this.logAuditoria.sort(function (a, b) {
        if (a.timestamp < b.timestamp) return -1;
        if (a.timestamp > b.timestamp) return 1;
        return 0;
      });
    } else {
      this.logAuditoria.sort(function (a, b) {
        if (a.timestamp > b.timestamp) return -1;
        if (a.timestamp < b.timestamp) return 1;
        return 0;
      });
    }
    console.log('log', this.logAuditoria);
  }

  findLogsByCriterio() {
    this.logService
      .findLogsByCriterio(
        this.params.startDate, // startDate
        this.params.endDate, // endDate
        this.params.acao, // acao
        this.params.roleUsuario, // roleUsuario
        this.params.logName, // logName
        this.params.emailUsuario // emailUsuario
      )
      .subscribe({
        next: (data: LogAuditoria[]) => {
          this.logAuditoria = data;
          console.log('Logs fetched successfully:', this.logAuditoria);
          console.log('role', this.params.roleUsuario)
        },
        error: (error) => {
          console.error('Error fetching logs:', error);
        },
      });
  }
}
