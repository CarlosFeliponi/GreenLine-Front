import { Component, inject } from '@angular/core';
import { Carrinho } from '../../models/carrinho';
import { CarrinhoService } from '../../services/carrinho.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendaslist',
  standalone: true,
  imports: [],
  templateUrl: './vendaslist.component.html',
  styleUrl: './vendaslist.component.scss'
})
export class VendaslistComponent {
  lista: Carrinho[]=[];
  
  vendasService = inject(CarrinhoService);

  
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

  delete(carrinho: Carrinho){

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
        this.vendasService.delete(carrinho.idCarrinho).subscribe({
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
