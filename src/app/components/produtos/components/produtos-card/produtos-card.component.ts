import { Component, inject } from '@angular/core';
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
  lista: Produto[] = [];

  produtosService = inject(ProdutosService);

  listAll(){

    this.produtosService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
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

  constructor(){
    this.listAll();
    
  }
}
