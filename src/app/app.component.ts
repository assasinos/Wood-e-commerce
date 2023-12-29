import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite/lib/esm/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'e-commerce-wood-client';

  ngOnInit(): void {
    initFlowbite();
  }
}
