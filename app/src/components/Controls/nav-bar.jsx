import React, { Component } from "react";

import "./nav-bar.css";

import Nav from "./nav.jsx";

class NavBar extends Component {
    render() {
        const { children } = this.props;
        return <ul className="nav-bar">
            {children.map((el, index) => {
                return <Nav key={`nav-${index}`}>{el}</Nav>;
            })}
        </ul>;
  }
}

export default NavBar;
