import { Component } from '@angular/core';
import { DashNavComponent } from './components/dash-nav/dash-nav.component';
import { DashBodyComponent } from './components/dash-body/dash-body.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashNavComponent, DashBodyComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
