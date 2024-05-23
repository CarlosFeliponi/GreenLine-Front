import { Routes } from '@angular/router';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';


export const routes: Routes = [
    {path:"", redirectTo: "carrinho", pathMatch: 'full'},
    {path: "carrinho", component: CarrinhoComponent},
    {path: "carrinhoCard", component: CarrinhoComponent}
];
