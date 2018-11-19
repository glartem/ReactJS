import React, { Component } from "react";

import "./login-button.css";

class LoginButton extends Component {
    render() {
        return <button className="login-btn" onClick={() => {
            let popup = document.getElementById('login-popup');
            if (popup) popup.style.display = 'flex';
        }}>Login</button>;
  }
}

export default LoginButton;
