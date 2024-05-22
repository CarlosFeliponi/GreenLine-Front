import { Component } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MdbCollapseModule, MdbDropdownModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  actionsNav = [
    {
      text: "GREEN PRODUTOS",
      icon: 'fa-biohazard',
      url: '#',
      isExternal: false
    },
    {
      text: "SERVIÇOS",
      icon: 'fa-tools',
      url: '#',
      isExternal: false
    }
  ]

  actionsCategoria = [
    {
      text: "Placa de Video",
      url: '#',
      isExternal: false
    },
    {
      text: "Processador",
      url: '#',
      isExternal: false
    },
    {
      text: "Placa Mãe",
      url: '#',
      isExternal: false
    }
  ]
}
