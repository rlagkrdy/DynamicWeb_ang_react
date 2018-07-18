import { Component, OnInit } from '@angular/core';
import { InfoCard } from './info-card/info-card.component';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent implements OnInit {
  private infoList: InfoCard[] = [
    {
      img: 'assets/images/s-images/promo01.png',
      name: 'HOME',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img: 'assets/images/s-images/promo02.png',
      name: 'WE ARE',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img: 'assets/images/s-images/promo03.png',
      name: 'WORK',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img: 'assets/images/s-images/promo04.png',
      name: 'BLOG',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
