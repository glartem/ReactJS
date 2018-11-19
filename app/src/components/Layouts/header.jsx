import React, { Component } from "react";

import "./header.css";

import NavBar from "../Controls/nav-bar.jsx";
import LoginButton from "../Controls/login-button.jsx";

class Header extends Component {
    links = ["Home", "About"];
    render() {
    return (
        <header className="some-class">
            <NavBar>
                {this.links.map((link, linkIndex) => {
                    return <a key={`nav-link-${linkIndex}`} href={`#${link}`}>{link}</a>;
                })}
            </NavBar>
            <LoginButton />
        </header>
    );
    }
}

export default Header;
