import * as React from 'react';
import './work.scss';
import { ImageCard, WorkCard } from './card/workCard';

export class Work extends React.Component {
    imageList: ImageCard[] = [
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
    render() {
        return (
            <div>
                <section className="work-section cfixed">
                    <h2 className="container sec-tit" id="work_section">
                        WORK
                    </h2>
                    <WorkCard imageList={this.imageList} />
                </section>
                <hr className="m-divider" />
            </div>
        );
    }
}
