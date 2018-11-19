import React, { Component } from "react";

import './page.css';

class Page extends Component {
  render() {
    const { children } = this.props;
    console.info('children >> ', children);
    return <div id="page">{children}</div>;
  }
}

export default Page;