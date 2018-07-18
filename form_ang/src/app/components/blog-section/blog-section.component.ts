import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {
  private blogList: Array<BlogCard> = [
    {
      img: 'assets/images/p-images/blog01.jpg',
      timeText: 'OCT 30, 2016',
      text: 'There are many variations of passages of Lorem Ipsum'
    },
    {
      img: 'assets/images/p-images/blog02.jpg',
      timeText: 'OCT 30, 2016',
      text: 'There are many variations of passages of Lorem Ipsum'
    },
    {
      img: 'assets/images/p-images/blog03.jpg',
      timeText: 'OCT 30, 2016',
      text: 'There are many variations of passages of Lorem Ipsum'
    }
  ];
  constructor() {}

  ngOnInit() {}
}

interface BlogCard {
  img: string;
  timeText: string;
  text: string;
}
