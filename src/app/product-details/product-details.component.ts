import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { initFlowbite } from 'flowbite';
import { Flowbite } from '../../decorators/FlowBite';
import { products } from '../../data/Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})

@Flowbite()
export class ProductDetailsComponent implements OnInit, AfterViewInit {
  id: string | null = null;

  @ViewChild('decrementbutton') Decrement!: ElementRef;
  @ViewChild('incrementbutton') Increment!: ElementRef;
  @ViewChild('counterInput') Counter!: ElementRef;

  constructor(private route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    this.Decrement.nativeElement.addEventListener('click', () => {
      if (this.Counter.nativeElement.value > 1) {
        this.Counter.nativeElement.value--;
      }
    });

    this.Increment.nativeElement.addEventListener('click', () => {
      this.Counter.nativeElement.value++;
    });

  }


  product!: Product;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === null) return;
    this.product = products.find((product) => product.id === this.id)!;
    

  }


}
