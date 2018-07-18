import * as React from 'react';
import './header.scss';

interface HeaderProps {
    menuLists: MenuList[];
    scrollTo: (id: string, callback: Function) => void;
}

export class Header extends React.Component<HeaderProps> {
    slideToggle = (): void => {
        const menuEl: HTMLCollectionOf<
            Element
        > = document.getElementsByClassName('gnb');
        const display = menuEl[0]['style'].display === '' ? 'block' : '';
        menuEl[0]['style'].display = display;
    };

    render() {
        return (
            <div className="header" id="home_section">
                <h1 className="logo">
                    <a href="">INDIGO</a>
                </h1>
                <nav>
                    <ul className="gnb">
                        {this.props.menuLists.map((item: MenuList) => {
                            return (
                                <li>
                                    <a
                                        onClick={() => {
                                            this.props.scrollTo(
                                                item.section,
                                                this.slideToggle
                                            );
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <span className="menu-toggle-btn" onClick={this.slideToggle}>
                    <span />
                    <span />
                    <span />
                </span>
            </div>
        );
    }
}

export interface MenuList {
    name: string;
    section: string;
}
