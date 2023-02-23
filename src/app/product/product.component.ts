import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/model/Product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: String = "welcome";
  listProduct!: Product[];
  alertStock!:number;
  constructor(private productService:ProductService, private calculServ:CalculService) { }

  ngOnInit(): void {
    this.listProduct=this.productService.Listproducts;
    this.alertStock=this.calculServ.getNumberOf(this.listProduct,'quantity',0)
    
  }

  buy(p: number) {
    this.listProduct[p].quantity--;
  }

  like(l: number) {
    this.listProduct[l].like++;
  }
  

}


