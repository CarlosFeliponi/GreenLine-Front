export class Vendas {
    idCarrinho!: number;
    descricaoCarrinho!: string;
    valorCarrinho!: number;

    constructor(idCarrinho: number, descricaoCarrinho:string, valorCarrinho:number){
        this.descricaoCarrinho = descricaoCarrinho;
        this.idCarrinho=idCarrinho;
        this.valorCarrinho=valorCarrinho;
    }
}
