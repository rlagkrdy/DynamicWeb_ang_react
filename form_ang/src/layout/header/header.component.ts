import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuList } from '../../model/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() private menuLists: MenuList[];
  @Output() scrollEvent = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  slideToggle(): void {
    const menuEl: HTMLCollectionOf<Element> = document.getElementsByClassName(
      'gnb'
    );
    const display = menuEl[0]['style'].display === '' ? 'block' : '';
    menuEl[0]['style'].display = display;
  }

  scrollTos(id: string) {
    this.scrollEvent.emit(id);
  }
}
