import React, { Component } from "react";

import "./nav.css";

class Nav extends Component {
    render() {
        const { children } = this.props;
        return <li className="nav">{ children }</li>;
  }
}

export default Nav;
