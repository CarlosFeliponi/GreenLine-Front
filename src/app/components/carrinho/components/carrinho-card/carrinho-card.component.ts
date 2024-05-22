import { Component } from '@angular/core';
import { Carrinho } from '../../../../models/carrinho';

@Component({
  selector: 'app-carrinho-card',
  standalone: true,
  imports: [],
  templateUrl: './carrinho-card.component.html',
  styleUrl: './carrinho-card.component.scss'
})
export class CarrinhoCardComponent {

  lista: Carrinho[] = [];

  constructor(){

    let carrinho: Carrinho = new Carrinho();
    carrinho.id = 1;
    carrinho.produto = "PC gamer "

  }
}
