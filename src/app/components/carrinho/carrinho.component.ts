import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../layout/footer/footer.component';
import { CarrinhoCardComponent } from './components/carrinho-card/carrinho-card.component';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, CarrinhoCardComponent],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent {
}
