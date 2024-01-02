import { Component, Input, OnInit } from '@angular/core';
import { StarState } from '../../types/star';

@Component({
  selector: 'app-item-rating',
  templateUrl: './item-rating.component.html',
  styleUrl: './item-rating.component.css'
})
export class ItemRatingComponent implements OnInit{
  StarState =  StarState;
  ngOnInit(): void {
    let stars = this.StarRating;
    //Full Star
    while (stars >= 1){
      this.StarList.push(StarState.full);
      stars--;
    }
    //Half Star
    if (stars >= 0.5){
      this.StarList.push(StarState.half);
    }

    //Empty Star
    while (this.StarList.length < 5){
      this.StarList.push(StarState.empty);
    }


  }


  StarList :Array<StarState> = [];
  @Input() StarRating: number = 0;





}
