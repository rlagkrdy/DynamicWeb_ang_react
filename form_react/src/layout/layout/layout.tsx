import * as React from 'react';
import { Footer } from '../footer/footer';
import { MenuList, Header } from '../header/header';
import { ImgSlider } from '../../components/Imgslider/imgSlider';
import { Info } from '../../components/info/info';
import { Work } from '../../components/work/work';
import { Blog } from '../../components/blog/blog';
import './layout.scss';
import Contact from '../../components/contact/contact';

export class Layout extends React.Component {
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
    scrollTo(id: string, callBack: Function): void {
        const element = document.querySelector('#' + id);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                callBack();
            }, 0);
        }
    }
    render() {
        return (
            <div>
                <Header menuLists={this.menuLists} scrollTo={this.scrollTo} />
                <section>
                    <ImgSlider />
                    <Info />
                    <Work />
                    <Blog />
                    <Contact />
                </section>
                <Footer />
            </div>
        );
    }
}
