import { Component } from '@angular/core';
import { products } from '../../data/Products';
import { Product } from '../../types/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  products : Array<Product> = products;

}
