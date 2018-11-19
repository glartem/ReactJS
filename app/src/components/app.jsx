import React, { Component } from "react";

import "./app.css";

import Page from "./Layouts/page.jsx";
import Footer from "./Layouts/footer.jsx";
import Header from "./Layouts/header.jsx";
import Main from "./Layouts/main.jsx";
import LoginPopup from "./Popups/login-popup.jsx";

class App extends Component {
  render() {
    return (
        <Page>
            <Header />
            <Main>page content</Main>
            <Footer />
            <LoginPopup />
        </Page>
    );
  }
}

export default App;
