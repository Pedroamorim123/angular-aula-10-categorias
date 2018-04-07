import { Injectable } from '@angular/core';
import { Categoria } from '../domain/categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriaService {

  constructor(private http : HttpClient) { }

  getCategorias() : Observable<Categoria[]>{

    return this.http.get<Categoria[]>(`https://tcc-lojavirtual.herokuapp.com/categorias`)
  }

}
