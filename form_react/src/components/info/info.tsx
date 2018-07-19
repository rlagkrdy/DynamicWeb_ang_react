import * as React from 'react';
import './info.scss';
import { InfoCardType, InfoCard } from './card/infoCard';

export class Info extends React.Component {
    infoList: InfoCardType[] = [
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
    render() {
        return (
            <div>
                <section className="display-section">
                    <div className="container">
                        <h2 className="sec-tit" id="weare_section">
                            WE ARE
                        </h2>
                        <p className="desc">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a
                            <br />piece of classical Latin literature from 45
                            BC, making it over 2000 years old.
                        </p>
                    </div>
                </section>
                <InfoCard infoList={this.infoList} />
            </div>
        );
    }
}
