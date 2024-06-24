import { Component, Input, inject } from '@angular/core';
import { ItemCarrinho } from '../../../../models/item-carrinho';
import { CommonModule } from '@angular/common';
import { ItemCarrinhoService } from '../../../../services/item-carrinho.service';
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

  @Input() total: number = 0;
  @Input() frete: number = 0;
}
