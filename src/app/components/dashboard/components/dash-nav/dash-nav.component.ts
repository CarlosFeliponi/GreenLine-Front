import { Component } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@Component({
  selector: 'app-dash-nav',
  standalone: true,
  imports: [MdbCollapseModule],
  templateUrl: './dash-nav.component.html',
  styleUrl: './dash-nav.component.scss'
})
export class DashNavComponent {

}
