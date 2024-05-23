import { Component, inject } from '@angular/core';
import { Vendas } from '../../models/vendas';
import { VendasService } from '../../services/vendas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendaslist',
  standalone: true,
  imports: [],
  templateUrl: './vendaslist.component.html',
  styleUrl: './vendaslist.component.scss'
})
export class VendaslistComponent {
  lista: Vendas[]=[];
  
  vendasService = inject(VendasService);

  
  listAll(){
    this.vendasService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro =>{
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    })
  }

  delete(vendas: Vendas){

    Swal.fire({
      title: "Atenção",
      text: "deseja deletar a categoria?",
      icon: "warning",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: 'Não',
    }).then((result) => {

      if (result.isConfirmed){
        this.vendasService.delete(vendas.idCarrinho).subscribe({
          next: mensagem => {
            Swal.fire({
              title: "SUCESSO",
              text: mensagem,
              icon: "success",
              confirmButtonText: 'OK',
            });

            this.listAll();
          },
          error: erro =>{
            Swal.fire({
              title: "ERRO",
              text: "Ocorreu um erro inesperado",
              icon: "error",
              confirmButtonText: 'OK',
            });
          }
        });

      }
    });
  }
}
