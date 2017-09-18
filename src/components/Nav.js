import React, {Component} from 'react';
import './css/nav.css';

export class Navbar extends Component {
    render() {

        const links = ["Home", "News", "Contact", "About Us"];
        const listLinks = links.map((link) => <li><a href="">{link}</a></li>);
        return (
            <ul id="navBar">
                {listLinks}
            </ul>
        );
    }
};
