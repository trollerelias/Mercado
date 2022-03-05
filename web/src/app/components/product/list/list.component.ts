import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  termino: string;
  products: Product[] = [];
  constructor(
    private _productService: ProductService
  ) {
    this._productService.termino.subscribe( value => {
      this.termino = value;
      this.search(value);
    });
  }

  ngOnInit(): void {
  }

  search(termino: string) {
    this._productService.getProducts(termino)
    .subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
