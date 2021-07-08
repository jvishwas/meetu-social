import React from "react";
import "./online.css";

function Online({ user }) {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img src={user.profilePicture} className="rightbarProfileImg" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{user.Username}</span>
      </li>
    </div>
  );
}
export default Online;
