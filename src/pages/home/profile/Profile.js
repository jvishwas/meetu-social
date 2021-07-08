import React from "react";
import "./profile.css";
import Topbar from "../../../components/Topbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Rightbar from "../../../components/rightbar/Rightbar";
import Feed from "../../../components/feedbar/Feed";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="assets/jv2.jpg" alt="" className="profileCoverImg" />
              <img
                src="assets/jagannath.jpg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileUserName">Jagannath</h4>
              <span className="profileUserDesc">
                HeLLo,WoUlD YoU LIke It My PAgE.
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}
