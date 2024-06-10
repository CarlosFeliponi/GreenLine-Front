import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoVendasDashComponent } from './grafico-vendas-dash.component';

describe('GraficoVendasDashComponent', () => {
  let component: GraficoVendasDashComponent;
  let fixture: ComponentFixture<GraficoVendasDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoVendasDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficoVendasDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
