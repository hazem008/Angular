import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/model/Product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  product!:Product;
  constructor() { }

  ngOnInit(): void {
    
    this.product=new Product();
  }

}
