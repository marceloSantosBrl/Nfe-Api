import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FullComponent} from "./layouts/full/full.component";
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CadastroClienteComponent} from "./pages/cadastro-cliente/cadastro-cliente.component";
import {CadastroProdutoComponent} from "./pages/cadastro-produto/cadastro-produto.component";
import {CadastroVendaComponent} from "./pages/cadastro-venda/cadastro-venda.component";
import {HttpClientModule} from "@angular/common/http";
import {VisorVendasComponent} from "./pages/cadastro-venda/visor-vendas/visor-vendas.component";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FullComponent,
    ReactiveFormsModule,
    CadastroClienteComponent,
    CadastroProdutoComponent,
    CadastroVendaComponent,
    VisorVendasComponent,
  ]
})
export class AppModule {
}
