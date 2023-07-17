import {Component, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullComponent} from "../../shared/layouts/full/full.component";
import {FormularioComponent} from "./formulario/formulario.component";
import { HttpClient } from '@angular/common/http';
import {interval, Subscription} from 'rxjs';
import {NgbToast} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [CommonModule, FullComponent, FormularioComponent, NgbToast],
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnDestroy{

  public showToast = false;
  public $post?: Subscription;
  public $navigate?: Subscription;

  constructor(private readonly http: HttpClient,
              private readonly router: Router) {
  }

  private successClick(){
    console.log('Success');
    this.showToast = true;
    this.$navigate = interval(2000)
      .subscribe({
        next: () => this.router.navigate(['/listagem-cliente'])
      })
  }

  public submitHandler(clientData: any) {
    this.$post = this.http
    .post('http://localhost:5035/api/pessoa', clientData)
    .subscribe({
      next:() => this.successClick(),
      error: err => console.log(err),
    });
  }

  ngOnDestroy(): void {
    if (this.$post !== null) {
      this.$post?.unsubscribe();
    }
    if (this.$navigate !== null) {
      this.$navigate?.unsubscribe();
    }
  }
}
