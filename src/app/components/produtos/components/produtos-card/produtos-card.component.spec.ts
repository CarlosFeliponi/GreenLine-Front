import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCardComponent } from './produtos-card.component';

describe('ProdutosCardComponent', () => {
  let component: ProdutosCardComponent;
  let fixture: ComponentFixture<ProdutosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
