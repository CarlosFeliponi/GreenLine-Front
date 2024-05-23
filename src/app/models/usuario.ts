export class Usuario {
    idCliente: number;
    enderecoCliente: string;
    nomeCliente: string;
    telefoneCliente: string;
    usuarioIdUsuario: number;
  
    constructor(idCliente: number, enderecoCliente: string, nomeCliente: string, telefoneCliente: string, usuarioIdUsuario: number) {
      this.idCliente = idCliente;
      this.enderecoCliente = enderecoCliente;
      this.nomeCliente = nomeCliente;
      this.telefoneCliente = telefoneCliente;
      this.usuarioIdUsuario = usuarioIdUsuario;
    }
  }
  
