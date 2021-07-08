import React from "react";
import "./closefriend.css";

export default function CloseFriend({ user }) {
  return (
    <div>
      <li className="sidebarFriend">
        <img className="sidebarFriendimg" src={user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.Username}</span>
      </li>
    </div>
  );
}
