import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../layout/footer/footer.component';
import { CarrinhoItemComponent } from './components/carrinho-item/carrinho-item.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [NavbarComponent ,FooterComponent, RouterOutlet, CarrinhoItemComponent],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})

export class CarrinhoComponent {


}
