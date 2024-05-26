import { Component, inject } from '@angular/core';
import { CarrinhoItemComponent } from './components/carrinho-item/carrinho-item.component';
import { CarrinhoCardComponent } from './components/carrinho-card/carrinho-card.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';


@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CarrinhoItemComponent, CarrinhoCardComponent, FooterComponent,NavbarComponent],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})

export class CarrinhoComponent {


}
