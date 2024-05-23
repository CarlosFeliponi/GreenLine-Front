import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrincipalUserComponent } from './components/principal/principal-user/principal-user.component';
import { ProdutosCardComponent } from './components/produtos/components/produtos-card/produtos-card.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

export const routes: Routes = [
    
    {path: "login", component: LoginComponent, pathMatch: 'full'},
    {path: "cadastro", component: CadastroComponent, pathMatch: 'full'},
    
    
    {path: "", redirectTo: "star/home", pathMatch: 'full'},
    {path: "star", component: PrincipalUserComponent, children: [
        {path: "home", component: HomeComponent},
        {path: "produto", component: ProdutosComponent},
        
        
        
    ]}
];
