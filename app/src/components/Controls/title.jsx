import React, { Component } from "react";

import "./title.css";

class Title extends Component {
    render() {
        const { children } = this.props;
        return <div className="title">{children}</div>;
  }
}

export default Title;
