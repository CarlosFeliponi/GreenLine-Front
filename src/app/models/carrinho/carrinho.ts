export class Carrinho {

    idItem!: number;
    valorUnitario!: number;
    quantProd!: number;
    produto!: object;
    carrinho!: object;

    constructor(valorUnitario: number, quantProd: number){
        this.valorUnitario = valorUnitario;
        this.quantProd = quantProd;
    }

}
