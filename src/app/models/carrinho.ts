import { ItemCarrinho } from "./item-carrinho";
import { Usuario } from "./usuario";

export class Carrinho {
    
    idCarrinho!: number;
    descricaoCarrinho!: string;
    valorCarrinho!: number;
    itemCarrinho!: ItemCarrinho[];
    usuario!: Usuario;
    dataCarrinho!: any;
    status!: string;  

}
