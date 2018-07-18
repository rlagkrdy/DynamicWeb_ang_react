import * as React from 'react';
import './workCard.scss';

interface WorkCardProps {
    imageList: ImageCard[];
}

export class WorkCard extends React.Component<WorkCardProps> {
    render() {
        return (
            <ul className="work-list">
                {this.props.imageList.map((item: ImageCard) => {
                    return (
                        <li>
                            <a href="">
                                <div className="info">
                                    <h3>{item.title}</h3>
                                    <span>{item.subTitle}</span>
                                </div>
                                <img src={item.img} alt="" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export interface ImageCard {
    title: string;
    subTitle: string;
    img: string;
}
