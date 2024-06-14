import { Login } from "./login";

export class Usuario {
    idCliente: number;
    enderecoCliente: string;
    nomeCliente: string;
    telefoneCliente: string;
    login: Login;
  
    constructor(idCliente: number, enderecoCliente: string, nomeCliente: string, telefoneCliente: string, login: Login) {
      this.idCliente = idCliente;
      this.enderecoCliente = enderecoCliente;
      this.nomeCliente = nomeCliente;
      this.telefoneCliente = telefoneCliente;
      this.login = login;
    }
  }
  
