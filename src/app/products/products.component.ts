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
    {
      details: {
        Material: 'Solid Maple Wood',
        Dimensions: '4 inches (Diameter) x 0.25 inches (Thickness)',
        Craftsmanship: 'Set of 4 coasters, each featuring a unique wood grain pattern',
        CareInstructions: 'Wipe clean with a damp cloth; do not soak.',
      },
      description: 'This set of 4 coasters is made from solid maple wood and features a unique wood grain pattern on each coaster. The coasters are finished with a clear lacquer to protect the wood from moisture and wear. Each coaster measures 4 inches in diameter and 0.25 inches in thickness. Wipe clean with a damp cloth; do not soak.',
      starRating: 4.5,
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
        CareInstructions: 'Hand wash with mild soap; dry immediately.',
      },
      description: 'This cutting board is made from sustainable bamboo and features a smooth finish. The board measures 12 inches in length, 8 inches in width, and 0.75 inches in thickness. Hand wash with mild soap; dry immediately.',
      starRating: 3.5,
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
        CareInstructions: 'Dust gently with a soft, dry cloth.',
      },
      description: 'This wall art is made from reclaimed teak wood and features intricate wood carving depicting [Specify Design]. The wall art measures 24 inches in height, 18 inches in width, and 1.5 inches in depth. Dust gently with a soft, dry cloth.',
      starRating: 5,
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
        CareInstructions: 'Wipe with a damp cloth; air dry.',
      },
      description: 'This set of 6 coasters is made from assorted hardwoods (oak, walnut, maple) and features a mix of wood grains. Each coaster measures 3.5 inches in diameter and 0.2 inches in thickness. Wipe with a damp cloth; air dry.',
      starRating: 4,
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
        CareInstructions: 'Hand wash with mild soap; dry thoroughly.',
      },
      description: 'This serving tray is made from cherry wood with walnut accents and features sturdy handles with a raised edge for easy serving. The tray measures 18 inches in length, 12 inches in width, and 2 inches in height. Hand wash with mild soap; dry thoroughly.',
      starRating: 4.5,
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
        CareInstructions: 'Wipe clean with a soft, dry cloth.',
      },
      description: 'This set of 5 emojis is made from birch plywood and features laser-cut expressions. Each emoji measures 3 inches in diameter and 0.2 inches in thickness. Wipe clean with a soft, dry cloth.',
      starRating: 4,
      id: '6',
      name: 'Emoji Set',
      price: 55,
      image: '../../assets/Home/img8.webp',
    },
  ];


}
