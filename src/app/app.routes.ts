import { Routes } from '@angular/router';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CarrinhoCardComponent } from './components/carrinho/components/carrinho-card/carrinho-card.component';
import { CarrinholistComponent } from './components/carrinho/carrinholist/carrinholist.component';

export const routes: Routes = [
    {path:"", redirectTo: "carrinho", pathMatch: 'full'},
    {path: "carrinho", component: CarrinhoComponent},
    {path: "carrinhoCard", component: CarrinhoCardComponent},
    {path: "carrinhoList", component: CarrinholistComponent}

];
