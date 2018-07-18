import * as React from 'react';
import './Blog.scss';

export class Blog extends React.Component {
    blogList: Array<BlogCard> = [
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
    render() {
        return (
            <section className="blog-section">
                <div className="container flex-space">
                    <h2 className="sec-tit" id="blog_section">
                        BLOG
                    </h2>
                    <ul className="blog-list">
                        {this.blogList.map((item: BlogCard) => {
                            return (
                                <li>
                                    <a href="">
                                        <img src={item.img} alt="" />
                                    </a>
                                    <time>{item.timeText}}</time>
                                    <a href="">
                                        <h3>{item.text}</h3>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        );
    }
}

interface BlogCard {
    img: string;
    timeText: string;
    text: string;
}
