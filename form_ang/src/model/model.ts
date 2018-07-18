import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Model {
  menuLists: MenuList[] = [
    {
      name: 'HOME',
      section: 'home_section'
    },
    {
      name: 'WE ARE',
      section: 'weare_section'
    },
    {
      name: 'WORK',
      section: 'work_section'
    },
    {
      name: 'BLOG',
      section: 'blog_section'
    },
    {
      name: 'CONTACT US',
      section: 'contact_section'
    }
  ];
  constructor() {}
}

export interface MenuList {
  name: string;
  section: string;
}
