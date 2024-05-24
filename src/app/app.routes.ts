import { Routes } from '@angular/router';
import { PrincipalUserComponent } from './components/principal/principal-user/principal-user.component';
import { ProdutosCardComponent } from './components/produtos/components/produtos-card/produtos-card.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Produto } from './models/produto';
import { ProdutoslistComponent } from './components/produtos/produtoslist/produtoslist.component';
import { CategoriaslistComponent } from './components/categorias/categoriaslist/categoriaslist.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    
    // {path: "login", component: LoginComponent, pathMatch: 'full'},
    // {path: "cadastro", component: CadastroComponent, pathMatch: 'full'},
    
    
    // {path: "", redirectTo: "star/home", pathMatch: 'full'},
    // {path: "star", component: PrincipalUserComponent, children: [
    //     {path: "home", component: HomeComponent},
    //     {path: "produto", component: ProdutosComponent},
    //     {path: "perfil", component: UsuarioComponent},
    // ]},

    // {path: "x", redirectTo: "admin", pathMatch: 'full'},
    // {path: "admin", component: DashboardComponent, children: [
    //     {path: "produtolist", component: ProdutoslistComponent},
    //     {path: "categorialist", component: CategoriaslistComponent},
    // ]}

    { path: '', component: PrincipalUserComponent, children: [

                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
                    title:'GreenLine'
                },
                {
                    path: 'produto',
                    loadComponent: () => import('./components/produtos/produtos.component').then(c => c.ProdutosComponent),
                    title:'GreenLine | Produtos'
                },
                {
                    path: 'usuario',
                    loadComponent: () => import('./components/usuario/usuario.component').then(c => c.UsuarioComponent),
                    title:'GreenLine | Usuario'
                },
    ]},

        {
            path: 'login',
            loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent),
            title:'GreenLine | Login'
        },
        {
            path: 'cadastro',
            loadComponent: () => import('./components/cadastro/cadastro.component').then(c => c.CadastroComponent),
            title:'GreenLine | Cadastro'
        },

        { path: 'admin', component: DashboardComponent, children: [

            
            {
                path: 'list',
                loadComponent: () => import('./components/produtos/produtoslist/produtoslist.component').then(c => c.ProdutoslistComponent),
                title:'dash | list |'
            },
            {
                path: 'details',
                loadComponent: () => import('./components/produtos/produtosdetails/produtosdetails.component').then(c => c.ProdutosdetailsComponent),
                title:'dash | datails |'
            },
        ]}

]
