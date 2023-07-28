import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component')
      .then((m) => m.HomeComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./pages/sign-up/sign-up.component')
      .then(m => m.SignUpComponent),
  },
  {
    path: 'cliente/cadastro',
    loadComponent: () => import('./pages/cadastro-cliente/cadastro-cliente.component')
      .then(m => m.CadastroClienteComponent),
  },
  {
    path: 'produto/cadastro',
    loadComponent: () => import('./pages/cadastro-produto/cadastro-produto.component')
      .then(m => m.CadastroProdutoComponent),
  },
  {
    path: 'venda/cadastro',
    loadComponent: () => import('./pages/cadastro-venda/cadastro-venda.component')
      .then(m => m.CadastroVendaComponent),
  },
  {
    path: 'cliente',
    loadComponent: () => import('./pages/listagem-clientes/listagem-clientes.component')
      .then(m => m.ListagemClientesComponent),
  },
  {
    path: 'venda',
    loadComponent: () => import('./pages/listagem-venda/listagem-venda.component')
      .then(m => m.ListagemVendaComponent),
  },
  {
    path: 'produto',
    loadComponent: () => import('./pages/listagem-produto/listagem-produto.component')
      .then(m => m.ListagemProdutoComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
