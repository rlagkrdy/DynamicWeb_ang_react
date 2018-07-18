import { Component, OnInit } from '@angular/core';
import { ImageCard } from './image-card/image-card.component';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent implements OnInit {
  private imageList: ImageCard[] = [
    {
      title: 'Running',
      subTitle: 'WEB/PRINT',
      img: 'assets/images/p-images/work01.jpg'
    },
    {
      title: 'Rugby',
      subTitle: 'WEB/PRINT',
      img: 'assets/images/p-images/work02.jpg'
    },
    {
      title: 'Weight',
      subTitle: 'WEB/PRINT',
      img: 'assets/images/p-images/work03.jpg'
    },
    {
      title: 'Marathon',
      subTitle: 'WEB/PRINT',
      img: 'assets/images/p-images/work04.jpg'
    },
    {
      title: 'Boxing',
      subTitle: 'WEB/PRINT',
      img: 'assets/images/p-images/work05.jpg'
    },
    {
      title: 'Ice Hockey',
      subTitle: 'WEB/PRINT',
      img: 'assets/images/p-images/work06.jpg'
    },
    {
      title: 'Skate Board',
      subTitle: 'WEB/PRINT',
      img: 'assets/images/p-images/work07.jpg'
    },
    {
      title: 'Basketball',
      subTitle: 'WEB/PRINT',
      img: 'assets/images/p-images/work08.jpg'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
