import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Produto } from '../../../../models/produto';
import { ProdutosService } from '../../../../services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos-card',
  standalone: true,
  imports: [],
  templateUrl: './produtos-card.component.html',
  styleUrl: './produtos-card.component.scss'
})

export class ProdutosCardComponent {

  //serve para receber um objeto produto do componente pai
  @Input("produto") produto!: Produto;

  @Output("retorno") retornoProduto = new EventEmitter<any>();

  btnClicked(){
    this.retornoProduto.emit(this.produto);
  }
  // lista: Produto[] = [];

  // produtosService = inject(ProdutosService);

  // listAll(){

  //   this.produtosService.listAll().subscribe({
  //     next: lista => {
  //       this.lista = lista;
  //     },
  //     error: erro =>{
  //       Swal.fire({
  //         title: "ERRO",
  //         text: "Ocorreu um erro inesperado",
  //         icon: "error",
  //         confirmButtonText: 'OK',
  //       });
  //     }
      
  //   });
    
  // }

  // constructor(){
  //   this.listAll();
    
  // }
}
