import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: String = "welcome";
  listProduct!: Product[];
  constructor() { }

  ngOnInit(): void {

    this.listProduct = [
      { id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0 },
      { id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0 },
      { id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0 },]
  }

  buy(p: number) {
    this.listProduct[p].quantity--;
  }

  like(l: number) {
    this.listProduct[l].like++;
  }

}


