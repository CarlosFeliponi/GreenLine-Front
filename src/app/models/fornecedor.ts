import { Produto } from "./produto";

export class Fornecedor {

    idFornecedor!: number;
    cnpj!: string;
    nomeFornecedor!: string;
    emailFornecedor!: string;
    produto!: Produto;
}
