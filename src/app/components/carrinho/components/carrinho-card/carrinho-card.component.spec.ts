import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoCardComponent } from './carrinho-card.component';

describe('CarrinhoCardComponent', () => {
  let component: CarrinhoCardComponent;
  let fixture: ComponentFixture<CarrinhoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrinhoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrinhoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
