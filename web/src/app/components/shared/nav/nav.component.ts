import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit() {
  }

  buscar( termino:string ){
    this._productService.setTermino(termino);
    console.log(termino);
  }

}
