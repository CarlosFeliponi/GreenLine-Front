

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule] 
})

export class LoginComponent {
  loginData: Login = new Login('','') // Certifique-se de que o modelo Usuario está importado corretamente
  erroLogin: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  logar() {
    this.loginService.login(this.loginData).subscribe(
      response => {
        Swal.fire({
          title: 'Bem vindo',
          icon: 'success',
          confirmButtonText: 'Ok',
        });      },
      error => {
        Swal.fire({
          title: 'Ocorreu um erro, login inexistente',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    );
    
  }
}

