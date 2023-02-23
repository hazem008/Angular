import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Core/model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  id!:number;
  product!:Product;
  constructor(private route:ActivatedRoute ,private ProdServi:ProductService, private routes:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    
    this.product=this.ProdServi.Listproducts[this.id-1]
  }
  Return(){
    this.routes.navigateByUrl("/products")
  }

}
