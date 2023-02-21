import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/model/Product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  id!:number;
  product!:Product[];
  constructor() { }

  ngOnInit(): void {
    
  }

}
