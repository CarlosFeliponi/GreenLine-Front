import { Component, Input, inject } from '@angular/core';
import { ProdutosCardComponent } from './components/produtos-card/produtos-card.component';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../models/produto';
import Swal from 'sweetalert2';
import { FooterComponent } from "../layout/footer/footer.component";
import { NavbarComponent } from "../layout/navbar/navbar.component";
import { ItemCarrinhoService } from '../../services/item-carrinho.service';
import { ItemCarrinho } from '../../models/item-carrinho';
import { Vendas } from '../../models/vendas';

@Component({
    selector: 'app-produtos',
    standalone: true,
    templateUrl: './produtos.component.html',
    styleUrl: './produtos.component.scss',
    imports: [ProdutosCardComponent, FooterComponent, NavbarComponent]
})
export class ProdutosComponent {
  lista: Produto[] = [];
  produtoe: Produto = new Produto ("", 1, "");
  carrinho: Vendas = new Vendas (0, "", 0);
  itemCarrinho: ItemCarrinho = new ItemCarrinho (0, 1, this.produtoe, this.carrinho);

  produtosService = inject(ProdutosService);
  itemCarrinhoService = inject(ItemCarrinhoService);

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

  save(produto: Produto){
  
      if (produto){
        console.log('produto recebid: ', produto);

        this.itemCarrinho = new ItemCarrinho(produto.valorProduto, 1, produto, this.carrinho);
        console.log('item carrinho criado: ',this.itemCarrinho);

        this.itemCarrinhoService.save(this.itemCarrinho).subscribe({
          next: mensagem => {
            Swal.fire({
              title: mensagem,
              icon: 'success',
              confirmButtonText: 'Ok',
            });
            //this.retorno.emit(this.itemCarrinho);
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

    }

  btnClicked(produto: Produto){
    this.save(produto);
    console.log('item carrinho apos save: ', this.itemCarrinho);
  }


  

  constructor(){
    this.listAll();
    
  }

}
