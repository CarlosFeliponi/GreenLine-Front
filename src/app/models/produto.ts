import { Categoria } from "./categoria";
import { Fornecedor } from "./fornecedor";
import { ItemCarrinho } from "./item-carrinho";

export class Produto {
    idProduto!: number;
    nomeProduto!: string;
    valorProduto!: number;
    descricaoProduto!: string;

    fornecedor!: Fornecedor;
    itemCarrinho!: ItemCarrinho;
    categoria!: Categoria;

}
