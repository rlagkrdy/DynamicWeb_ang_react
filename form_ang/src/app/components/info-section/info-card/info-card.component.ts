import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() infoList: InfoCard[];
  constructor() {}

  ngOnInit() {}
}
export interface InfoCard {
  img: string;
  name: string;
  text: string;
}
