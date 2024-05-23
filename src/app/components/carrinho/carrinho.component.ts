import { Component, inject } from '@angular/core';
import { CarrinhoItemComponent } from './components/carrinho-item/carrinho-item.component';
import { CarrinhoCardComponent } from './components/carrinho-card/carrinho-card.component';


@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CarrinhoItemComponent, CarrinhoCardComponent],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})

export class CarrinhoComponent {


}
