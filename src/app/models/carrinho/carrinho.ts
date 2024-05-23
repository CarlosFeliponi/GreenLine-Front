export class Carrinho {

    idItem!: number;
    valor_unitario!: number;
    quantProd!: number;
    produto!: object;
    carrinho!: object;

    constructor(valor_unitario: number, quantProd: number){
        this.valor_unitario = valor_unitario;
        this.quantProd = quantProd;
    }

}
