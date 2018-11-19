import React, { Component } from "react";

import "./menu.css";

import NavBar from "../Controls/nav-bar.jsx";

class Menu extends Component {
    links = ["Post 1", "Post 2", "Post 3", "Post 4"];
    render() {
        return <div className="menu">
            <NavBar className="vert">
                {this.links.map((link, linkIndex) => {
                    return <a key={`nav-link-${linkIndex}`} href={`#${link}`}>{link}</a>;
                })}
            </NavBar>
        </div>;
    }
}

export default Menu;
