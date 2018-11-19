import React, { Component } from "react";

import "./main.css";

import Menu from "./menu.jsx";
import Content from "./content.jsx";

class Main extends Component {
    render() {
        const { children } = this.props;
        return <main>
            <Menu />
            <Content>{children}</Content>
        </main>;
    }
}

export default Main;
