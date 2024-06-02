import { ItemCarrinho } from "./item-carrinho";
import { Usuario } from "./usuario";

export class Carrinho {
    idCarrinho!: number;
    descricaoCarrinho!: string;
    valorCarrinho!: number;
    itemCarrinho!: ItemCarrinho[];
    usuario!: Usuario;
    status!: string;  

    constructor(idCarrinho: number, descricaoCarrinho:string, valorCarrinho:number){
        this.descricaoCarrinho = descricaoCarrinho;
        this.idCarrinho=idCarrinho;
        this.valorCarrinho=valorCarrinho;
    }
}
