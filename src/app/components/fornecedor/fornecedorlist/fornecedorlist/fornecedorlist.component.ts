import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fornecedor } from '../../../../models/fornecedor';

@Component({
  selector: 'app-fornecedorlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fornecedorlist.component.html',
  styleUrl: './fornecedorlist.component.scss'
})
export class FornecedorlistComponent {

  lista: Fornecedor[] = [];

  constructor(){
    
    let fornecedor: Fornecedor = new Fornecedor();
    fornecedor.idFornecedor = 1;
    fornecedor.cnpj = '321';
    fornecedor.emailFornecedor = 'slas';
    fornecedor.nomeFornecedor = 'marcos';
 
    let fornecedor2: Fornecedor = new Fornecedor();
    fornecedor.idFornecedor = 2;
    fornecedor.cnpj = '123';
    fornecedor.emailFornecedor = 'slas';
    fornecedor.nomeFornecedor = 'marcos';

    let fornecedor3: Fornecedor = new Fornecedor();
    fornecedor.idFornecedor = 3;
    fornecedor.cnpj = '123';
    fornecedor.emailFornecedor = 'slas';
    fornecedor.nomeFornecedor = 'marcos';

    this.lista.push(fornecedor);
    this.lista.push(fornecedor2);
    this.lista.push(fornecedor3);

  }
}
