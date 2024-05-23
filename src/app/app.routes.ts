import { Routes } from '@angular/router';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CarrinhoItemComponent } from './components/carrinho/components/carrinho-item/carrinho-item.component';


export const routes: Routes = [
    {path:"", redirectTo: "carrinho", pathMatch: 'full'},
    {path: "carrinho", component: CarrinhoComponent},
    {path: "carrinhoItem", component: CarrinhoItemComponent}
];
