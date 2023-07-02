import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private readonly _http: HttpClient) { }

  public getProdutoId = (id: string) => {
    return this._http.get<any>(`http://localhost:5035/api/Produto/${id}`);
  }
}
