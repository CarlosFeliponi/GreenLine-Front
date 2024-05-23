import { Component, inject } from '@angular/core';
import { Carrinho } from '../../../../models/carrinho/carrinho';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../../../services/carrinho/carrinho.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho-item',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './carrinho-item.component.html',
  styleUrls: ['./carrinho-item.component.scss']
})
export class CarrinhoItemComponent {

  lista: Carrinho[] = [];

  carrinhoService = inject(CarrinhoService);

  value: number = 0;


  increment() {
    this.value++;
  }

  decrement() {
    if (this.value > 0){
    this.value--;
    }
  }

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

  delete(carrinho: Carrinho) {
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
