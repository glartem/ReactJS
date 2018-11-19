import React, { Component, PureComponent } from "react";

import "./content.css";

import Title from "../Controls/title.jsx";

class Content extends Component {
    render() {
        const { children } = this.props;
        return <div className="content-wrapper">
            <Title>Page Title</Title>
            <div id="content">{children}</div>
        </div>;
    }
}

export default Content;
