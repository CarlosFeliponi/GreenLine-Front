import { Carrinho } from "./carrinho";
import { Produto } from "./produto";

export class ItemCarrinho {

    idItem!: number;
    valorUnitario!: number;
    quantProd!: number;
    produto!: Produto;
    carrinho!: Carrinho;

    constructor(quantProd: number, produto: Produto){
    this.quantProd = quantProd;
    this.produto = produto;
    }

}