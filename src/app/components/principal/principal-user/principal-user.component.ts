import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal-user',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './principal-user.component.html',
  styleUrl: './principal-user.component.scss'
})
export class PrincipalUserComponent {

}
