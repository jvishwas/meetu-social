import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift_3.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Alexa</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img
          className="rightbarAdd"
          src="/assets/adversatise/jarritos_2.jpg"
          alt=""
        ></img>
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>

        <div className="rightbarInfo">
          <div className="rightbarInfoItems">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItems">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItems">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          <div className="rightbarInfoItems">
            <span className="rightbarInfoKey">Intrested :</span>
            <span className="rightbarInfoValue">Women</span>
          </div>
          <h4 className="rightbarTitle">User friends</h4>

          <div className="rightbarFollowings">
            <div className="rightbarFollowFriend">
              <img
                src="assets/Nikon.jpg"
                alt=""
                className="rightbarFollowImg"
              />
              <span className="rightbarFollowName">Nikon Methiu</span>
            </div>
            <div className="rightbarFollowFriend">
              <img
                src="assets/kimson.jpg"
                alt=""
                className="rightbarFollowImg"
              />
              <span className="rightbarFollowName">Kimson</span>
            </div>
            <div className="rightbarFollowFriend">
              <img
                src="assets/Natasha.jpg"
                alt=""
                className="rightbarFollowImg"
              />
              <span className="rightbarFollowName">Natasha</span>
            </div>
            <div className="rightbarFollowFriend">
              <img
                src="assets/poul.jpeg"
                alt=""
                className="rightbarFollowImg"
              />
              <span className="rightbarFollowName">Poul Heman</span>
            </div>
            <div className="rightbarFollowFriend">
              <img
                src="assets/stefan.jpg"
                alt=""
                className="rightbarFollowImg"
              />
              <span className="rightbarFollowName">Stefan Lilly</span>
            </div>
            <div className="rightbarFollowFriend">
              <img
                src="assets/sonia.jpg"
                alt=""
                className="rightbarFollowImg"
              />
              <span className="rightbarFollowName">Sonia</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
