
export class Produto {
    idProduto!: number;
    nomeProduto!: string;
    valorProduto!: number;
    descricaoProduto!: string;

    fornecedor!: object;
    itemCarrinho!: object;
    categoria!: object;

    constructor(nomeProduto: string, valorProduto: number, descricaoProduto: string){
        this.nomeProduto = nomeProduto;
        this.valorProduto = valorProduto;   
        this.descricaoProduto = descricaoProduto;   

    }
}
