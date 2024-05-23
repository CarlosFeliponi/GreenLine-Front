import { Component, inject } from '@angular/core';
import { Carrinho } from '../../../../models/carrinho/carrinho';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../../../services/carrinho/carrinho.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho-card',
  standalone: true,
  imports: [RouterLink, CommonModule ],
  templateUrl: './carrinho-card.component.html',
  styleUrl: './carrinho-card.component.scss'
})
export class CarrinhoCardComponent {

  lista: Carrinho[] = [];


  carrinhoService = inject(CarrinhoService);

}
