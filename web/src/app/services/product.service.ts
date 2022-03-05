import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // termino: string = '';
  public termino = new BehaviorSubject<string>('');;

  constructor(
    private http: HttpClient
    ) { }

  setTermino( termino: string) {
    this.termino.next(termino);
  }

  getProducts(termino?: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${ environment.apiRest }/product?termino=${ termino }`);
  }
}
