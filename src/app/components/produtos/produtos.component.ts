import { Component } from '@angular/core';
import { ProdutosCardComponent } from './components/produtos-card/produtos-card.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [ProdutosCardComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {


}
