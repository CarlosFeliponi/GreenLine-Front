import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './components/layout/admin/admin-layout/admin-layout.component';
import { FornecedorlistComponent } from './components/fornecedor/fornecedorlist/fornecedorlist/fornecedorlist.component';

export const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [
            {path: "fornecedor", component: FornecedorlistComponent},
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
                title: 'GreenLine'
            },
            {
                path: 'carrinho',
                loadComponent: () => import('./components/carrinho/carrinho.component').then(c => c.CarrinhoComponent),
                title: 'GreenLine | Carrinho'
            },
            {
                path: 'usuario',
                loadComponent: () => import('./components/usuario/usuario.component').then(c => c.UsuarioComponent),
                title: 'GreenLine | Usuario'
            },
            {
                path: 'produto',
                loadComponent: () => import('./components/produtos/produtos.component').then(c => c.ProdutosComponent),
                title: 'GreenLine | Produtos'
            }
        ]
    },


    {
        path: 'login',
        loadComponent: () => import('./components/layout/login/login.component').then(c => c.LoginComponent),
        title:'GreenLine | Login'
    },
    {
        path: 'cadastro',
        loadComponent: () => import('./components/layout/cadastro/cadastro.component').then(c => c.CadastroComponent),
        title:'GreenLine | Cadastro'
    },


    { path: 'admin', component: AdminLayoutComponent, children: [
        {
            path: 'produtoslist',
            loadComponent: () => import('./components/produtos/produtoslist/produtoslist.component').then(c => c.ProdutoslistComponent),
            title:'Admin | Listagem de Produtos'
        },
        {
            path: 'produtosdetails',
            loadComponent: () => import('./components/produtos/produtosdetails/produtosdetails.component').then(c => c.ProdutosdetailsComponent),
            title:'Admin | Editagem de Produtos'
        },
        {
            path: 'vendaslist',
            loadComponent: () => import('./components/vendaslist/vendaslist.component').then(c => c.VendaslistComponent),
            title:'GreenLine | Listagem de Vendas'
        },
        {
            path: 'categoriaslist',
            loadComponent: () => import('./components/categorias/categoriaslist/categoriaslist.component').then(c => c.CategoriaslistComponent),
            title:'GreenLine | Listagem de Categorias'
        },
        {
            path: 'categoriasdetails',
            loadComponent: () => import('./components/categorias/categoriasdetails/categoriasdetails.component').then(c => c.CategoriasdetailsComponent),
            title:'GreenLine | Editagem de Categorias'
        },

        //
        {
            path: 'fornecedorlist',
            loadComponent: () => import('./components/fornecedor/fornecedorlist/fornecedorlist/fornecedorlist.component').then(c => c.FornecedorlistComponent),
            title:'GreenLine | Listagem de Fornecedor'
        },
       
        //
    ]}
];
