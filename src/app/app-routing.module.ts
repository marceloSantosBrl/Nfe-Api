import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path:'cadastro-cliente',
    loadComponent: () => import('./pages/cadastro-cliente/cadastro-cliente.component')
      .then(m => m.CadastroClienteComponent),
  },
  {
    path: 'cadastro-produto',
    loadComponent: () => import('./pages/cadastro-produto/cadastro-produto.component')
      .then(m => m.CadastroProdutoComponent),
  },
  {
    path: 'cadastro-venda',
    loadComponent: () => import('./pages/cadastro-venda/cadastro-venda.component')
      .then(m => m.CadastroVendaComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
