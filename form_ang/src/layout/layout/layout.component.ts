import { Component, OnInit } from '@angular/core';
import { Model } from '../../model/model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(private menuModel: Model) {}

  ngOnInit() {}

  scrollTo(id: string): void {
    const element = document.querySelector('#' + id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }
}
