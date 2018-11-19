import React, { Component } from "react";

import "./login-popup.css";

class LoginPopup extends Component {
    render() {
        var click = () => {
            let popup = document.getElementById('login-popup');
            if (popup) popup.style.display = 'none';
        }
        //onLoad не работает почему-то
        return <div id="login-popup" onLoad={()=> {this.style.display = 'none'}}>
            <div className="popup-content" >
                <div>Login: <input type="text" /></div>
                <div>Password: <input type="password" /></div>
                <div>
                    <button id="sign-in" onClick={click}>Sign In</button>
                    <button id="cancel" onClick={click}>Cansel</button>
                </div>
            </div>
        </div>;
  }
}

export default LoginPopup;
