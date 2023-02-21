import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/model/Product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  product!:Product;

  constructor() { }

  ngOnInit(): void {
  }

}
