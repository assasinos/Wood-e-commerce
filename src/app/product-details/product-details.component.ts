import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  products: Array<Product> = [
    {
      details: {
        Material: 'Solid Maple Wood',
        Dimensions: '4 inches (Diameter) x 0.25 inches (Thickness)',
        Craftsmanship: 'Set of 4 coasters, each featuring a unique wood grain pattern',
        Care_Instructions: 'Wipe clean with a damp cloth; do not soak.',
      },
      id: '1',
      name: 'Coaster',
      price: 55,
      image: '../../assets/Home/img2.webp',
    },
    {
      details: {
        Material: 'Sustainable Bamboo',
        Dimensions: '12 inches (Length) x 8 inches (Width) x 0.75 inches (Thickness)',
        Craftsmanship: 'Durable cutting surface with a smooth finish',
        Care_Instructions: 'Hand wash with mild soap; dry immediately.',
      },
      id: '2',
      name: 'Cutting Board',
      price: 55,
      image: '../../assets/Home/img5.webp',
    },
    {
      details: {
        Material: 'Reclaimed Teak Wood',
        Dimensions: '24 inches (Height) x 18 inches (Width) x 1.5 inches (Depth)',
        Craftsmanship: 'Intricate wood carving depicting [Specify Design]',
        Care_Instructions: 'Dust gently with a soft, dry cloth.',
      },
      id: '3',
      name: 'Wall Art',
      price: 55,
      image: '../../assets/Home/img3.webp',
    },
    {
      details: {
        Material: 'Assorted Hardwoods (Oak, Walnut, Maple)',
        Dimensions: 'Each coaster - 3.5 inches (Diameter) x 0.2 inches (Thickness)',
        Craftsmanship: 'Set of 6 coasters with a mix of wood grains',
        Care_Instructions: 'Wipe with a damp cloth; air dry.',
      },
      id: '4',
      name: 'Coaster Set',
      price: 55,
      image: '../../assets/Home/img6.webp',
    },
    {
      details: {
        Material: 'Cherry Wood with Walnut Accents',
        Dimensions: '18 inches (Length) x 12 inches (Width) x 2 inches (Height)',
        Craftsmanship: 'Sturdy handles with a raised edge for easy serving',
        Care_Instructions: 'Hand wash with mild soap; dry thoroughly.',
      },
      id: '5',
      name: 'Serving Tray',
      price: 55,
      image: '../../assets/Home/img7.webp',
    },
    {
      details: {
        Material: 'Birch Plywood',
        Dimensions: 'Each emoji - 3 inches (Diameter) x 0.2 inches (Thickness)',
        Craftsmanship: 'Set of 5 emojis with laser-cut expressions',
        Care_Instructions: 'Wipe clean with a soft, dry cloth.',
      },
      id: '6',
      name: 'Emoji Set',
      price: 55,
      image: '../../assets/Home/img8.webp',
    },
  ];

  product!: Product;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === null) return;
    this.product = this.products.find((product) => product.id === this.id)!;
    initFlowbite();
  }
}
