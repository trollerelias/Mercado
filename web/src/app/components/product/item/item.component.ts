import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
