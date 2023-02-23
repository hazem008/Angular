import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Core/model/Product';
import { ProductService } from '../services/product.service';@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  product!:Product;
  constructor(private serviceProduct:ProductService,private route:Router) { }

  ngOnInit(): void {
    
    this.product=new Product();
  }
  add(){
    this.serviceProduct.AjoutProduct(this.product);
    this.route.navigateByUrl("/products");
  }
 

}
