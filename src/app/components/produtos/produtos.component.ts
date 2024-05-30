import { Component, Input, inject } from '@angular/core';
import { ProdutosCardComponent } from './components/produtos-card/produtos-card.component';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../models/produto';
import Swal from 'sweetalert2';
import { FooterComponent } from "../layout/footer/footer.component";
import { NavbarComponent } from "../layout/navbar/navbar.component";
import { ItemCarrinhoService } from '../../services/item-carrinho.service';
import { ItemCarrinho } from '../../models/item-carrinho';
import { Carrinho } from '../../models/carrinho';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
  imports: [ProdutosCardComponent, FooterComponent, NavbarComponent]
})
export class ProdutosComponent {
  lista: Produto[] = [];
  //carrinhoUser serve para puxar o carrinho do usuario logado passando pelos filtros do back que filtram o id usuario e o status
  carrinhoUser!: Carrinho;

  produtoe: Produto = new Produto("", 1, "");
  itemCarrinho: ItemCarrinho = new ItemCarrinho(1, this.produtoe);

  produtosService = inject(ProdutosService);
  itemCarrinhoService = inject(ItemCarrinhoService);
  loginService = inject(LoginService);//injetando a service de login para verificar o usuario logado

  produto: any;//serve para mandar o objeto produto para o componente filho(produto-card)

  listAll() {

    if (this.loginService.usuarioLogado != null)
      this.itemCarrinhoService.getCarrinhoByUser(this.loginService.usuarioLogado.idUsuario).subscribe({
        next: carrinho => {
          console.log(carrinho);
          this.carrinhoUser = carrinho;
        },
        error: erro => {
          Swal.fire({
            title: "ERRO",
            text: "Ocorreu um erro inesperado",
            icon: "error",
            confirmButtonText: 'OK',
          });
        }

      });

    this.produtosService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        Swal.fire({
          title: "ERRO",
          text: "Ocorreu um erro inesperado",
          icon: "error",
          confirmButtonText: 'OK',
        });
      }

    });

  }

  save(produto: Produto) {

    if (!produto || !produto.idProduto) {
      console.error('Produto ou idProduto é nulo:', produto);
      Swal.fire({
        title: 'Erro',
        text: 'Produto inválido',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    let itemEncontrado = false;

    //loop para verificar se o item ja existe no item_carrinho, caso exista icrementa 1 na quantidade produto
    if(this.carrinhoUser.itemCarrinho != null)
    for (let i = 0; i < this.carrinhoUser.itemCarrinho.length; i++) {

      if (this.carrinhoUser.itemCarrinho[i].produto.idProduto === produto.idProduto) {

        let id = this.carrinhoUser.itemCarrinho[i].idItem;
        this.itemCarrinho = this.carrinhoUser.itemCarrinho[i];
        this.itemCarrinho.quantProd += 1;

      let carrinhoTemp = new Carrinho();
      carrinhoTemp.idCarrinho = this.carrinhoUser.idCarrinho;
      this.itemCarrinho.carrinho = carrinhoTemp;

        this.itemCarrinhoService.update(this.itemCarrinho, id).subscribe({
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
              title: 'Erro ao atualizar item',
              text: erro.error?.message || 'Erro desconhecido',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
            console.log(erro);
          }
        });

        itemEncontrado = true;
        break;
      }

    }

    if (!itemEncontrado) {
      this.itemCarrinho = new ItemCarrinho(1, produto);
      let carrinhoTemp = new Carrinho();
      carrinhoTemp.idCarrinho = this.carrinhoUser.idCarrinho;
      this.itemCarrinho.carrinho = carrinhoTemp;

      console.log(this.itemCarrinho);

      this.itemCarrinhoService.save(this.itemCarrinho).subscribe({
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
            title: erro,
            icon: 'error',
            confirmButtonText: 'Ok',
          });
          console.log(erro);
        }
      });

    }
    console.log(itemEncontrado);
  }

  btnClicked(produto: Produto) {
    this.save(produto);

  }




  constructor() {
    this.listAll();

  }

}
