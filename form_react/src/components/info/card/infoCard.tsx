import * as React from 'React';
import './infoCard.scss';

export interface InfoCardType {
    img: string;
    name: string;
    text: string;
}

interface InfoCardProps {
    infoList: InfoCardType[];
}

export class InfoCard extends React.Component<InfoCardProps> {
    render() {
        return (
            <section className="promotion-section">
                <div className="container">
                    <ul className="promo-list">
                        {this.props.infoList.map(
                            (item: InfoCardType, idx: number) => {
                                return (
                                    <li key={idx}>
                                        <a href="#">
                                            <img src={item.img} alt="" />
                                            <h3>{item.name}</h3>
                                            <p>{item.text}</p>
                                        </a>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
            </section>
        );
    }
}
