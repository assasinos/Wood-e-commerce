import { Component, OnInit } from '@angular/core';
import { Product } from '../../types/product';
import { initFlowbite } from 'flowbite';
import { products } from '../../data/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
  products: Array<Product> = products;

}
