import React from "react";
import "./login.css";

export default function logIn() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MeetU</h3>
          <span className="loginDesc">
            Connect with Friends and the world around you on MeetU Social.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput"></input>
            <input placeholder="Password" className="loginInput"></input>
            <button className="loginButton">LogIn</button>
            <span className="loginForget">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
