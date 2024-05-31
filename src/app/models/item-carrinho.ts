import { Carrinho } from "./carrinho";
import { Produto } from "./produto";

export class ItemCarrinho {

    idItem!: number;
    valorUnitario!: number;
    quantProd!: number;
    produto!: Produto;
    carrinho!: Carrinho;

    constructor(valorUnitario: number, quantProd: number){
        this.valorUnitario = valorUnitario;
        this.quantProd = quantProd;
    }

}
