import { logicalExpression } from "@babel/types";
import React from "react";
import "./register.css";

export default function Register() {
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
            <input placeholder="UserName" className="loginInput"></input>
            <input placeholder="Email" className="loginInput"></input>
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            ></input>
            <input
              type="password"
              placeholder="Password Again"
              className="loginInput"
            ></input>
            <button type="submit" className="loginButton">
              Sign Up
            </button>

            <button type="submit" className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
