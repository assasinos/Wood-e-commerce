import { Component, OnInit } from '@angular/core';
import { Product } from '../../types/product';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
  products: Array<Product> = [
    { name: 'Coaster', price: 55, image: '../../assets/Home/img2.webp' },
    { name: 'Cutting Board', price: 55, image: '../../assets/Home/img5.webp' },
    { name: 'Wall Art', price: 55, image: '../../assets/Home/img3.webp' },
    { name: 'Coaster Set', price: 55, image: '../../assets/Home/img6.webp' },
    { name: 'Serving Tray', price: 55, image: '../../assets/Home/img7.webp' },
    { name: 'Emoji Set', price: 55, image: '../../assets/Home/img8.webp' },
  ];


}
