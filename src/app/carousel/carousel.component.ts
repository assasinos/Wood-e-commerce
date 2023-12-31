import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements AfterViewInit {

@Input() OneSlide: boolean = false;

  ngAfterViewInit(): void {



    let defaultTransform = 0;
    const goNext = () => {
      defaultTransform = defaultTransform -  GetItemWidth();
      if (Math.abs(defaultTransform) >= GetMaxScroll())
        defaultTransform = 0;
      this.sliderElement.nativeElement.style.transform = 'translateX(' + defaultTransform + 'px)';
    }
    this.nextElement.nativeElement.addEventListener('click', goNext);
    const goPrev = () => {
      if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
      else defaultTransform = defaultTransform +  GetItemWidth();
      this.sliderElement.nativeElement.style.transform = 'translateX(' + defaultTransform + 'px)';
    }
    this.prevElement.nativeElement.addEventListener('click', goPrev);


    const GetItemWidth = () => {
      return this.sliderElement.nativeElement.firstElementChild.clientWidth +parseInt(window.getComputedStyle(this.sliderElement.nativeElement).gap.replace('px', ''));
    }

    const GetMaxScroll = () => {
      //Check if screen is small 
      if (window.innerWidth < 768 || this.OneSlide) {
        return this.sliderElement.nativeElement.scrollWidth;
      }
      else if(window.innerWidth < 1024) {
      return this.sliderElement.nativeElement.scrollWidth - GetItemWidth();
      }
      return this.sliderElement.nativeElement.scrollWidth - GetItemWidth() *2;


    }

  }
  @ViewChild('next') nextElement!: ElementRef;
  @ViewChild('previous') prevElement!: ElementRef;
  @ViewChild('slider') sliderElement!: ElementRef;

  

}
