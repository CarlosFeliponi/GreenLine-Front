import { Component, Input, inject } from '@angular/core';
import { ProdutosCardComponent } from './components/produtos-card/produtos-card.component';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../models/produto';
import Swal from 'sweetalert2';
import { FooterComponent } from "../layout/footer/footer.component";
import { NavbarComponent } from "../layout/navbar/navbar.component";

@Component({
    selector: 'app-produtos',
    standalone: true,
    templateUrl: './produtos.component.html',
    styleUrl: './produtos.component.scss',
    imports: [ProdutosCardComponent, FooterComponent, NavbarComponent]
})
export class ProdutosComponent {
  lista: Produto[] = [];

  produtosService = inject(ProdutosService);

  produto: any;//serve para mandar o objeto produto para o componente filho(produto-card)

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
