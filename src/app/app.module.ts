import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from "./layouts/full/full.component";
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CadastroClienteComponent} from "./pages/cadastro-cliente/cadastro-cliente.component";

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
        FullComponent,
        ReactiveFormsModule,
        CadastroClienteComponent
    ]
})
export class AppModule { }
