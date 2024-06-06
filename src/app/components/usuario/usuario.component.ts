import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {

  usuarioService = inject(UsuarioService);
  cliente: Usuario = new Usuario();
  loginService = inject(LoginService);
  router = inject(Router);
  
  constructor(){ //EXECUTAR ANTES DE APARECER O COMPONENTE DE FATO... PARA Q O USUARIO VISUALIZE O COMPONENTE COM OS DADOS SETADOS AUTOMATICAMENTE.... 
    this.findByUsuarioId();
  }

  findByUsuarioId(){
    if(this.loginService.usuarioLogado == null){
      alert(`Fazer login novamente`);
      this.router.navigate([`home`]);
    }else
    this.usuarioService.findByUsuarioId(this.loginService.usuarioLogado.idUsuario).subscribe({
      next: cliente => {
        console.log(cliente);
        this.cliente = cliente;
      },
      error: erro =>  {
        alert('ERRO A SER TRATADO!');
      }
    });
  }
  
} 
