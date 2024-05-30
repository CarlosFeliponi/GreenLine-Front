export class Login {
  idUsuario!: number;
  emailUsuario: string;
  senhaUsuario: string;

  constructor(emailUsuario: string, senhaUsuario: string) {
    this.emailUsuario = emailUsuario;
    this.senhaUsuario = senhaUsuario;
  }
}