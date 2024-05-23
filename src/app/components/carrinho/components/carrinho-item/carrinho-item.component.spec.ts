import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoItemComponent } from './carrinho-item.component';

describe('CarrinhoItemComponent', () => {
  let component: CarrinhoItemComponent;
  let fixture: ComponentFixture<CarrinhoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrinhoItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrinhoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
