import { Component, inject } from '@angular/core';
import { Carrinho } from '../../../../models/carrinho/carrinho';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../../../services/carrinho/carrinho.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './carrinho-card.component.html',
  styleUrls: ['./carrinho-card.component.scss']
})
export class CarrinhoCardComponent {

  lista: Carrinho[] = [];

  carrinhoService = inject(CarrinhoService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.carrinhoService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });
  }

  deleteById(carrinho: Carrinho) {
    Swal.fire({
      title: 'Tem certeza que deseja deletar este registro?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        this.carrinhoService.delete(carrinho.idItem).subscribe({
          next: mensagem => {
            Swal.fire({
              title: mensagem,
              icon: 'success',
              confirmButtonText: 'Ok',
            });
            this.listAll();
          },
          error: erro => {
            Swal.fire({
              title: 'Ocorreu um erro',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        });
      }
    });
  }
}
