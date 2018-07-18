import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() imageList: ImageCard;
  constructor() {}

  ngOnInit() {}
}
export interface ImageCard {
  title: string;
  subTitle: string;
  img: string;
}
