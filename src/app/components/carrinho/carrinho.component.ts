import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../layout/footer/footer.component';
import { CarrinhoCardComponent } from './components/carrinho-card/carrinho-card.component';
import { CarrinhoService } from '../../services/carrinho/carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, CarrinhoCardComponent],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})



export class CarrinhoComponent {

}
